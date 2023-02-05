import { Injectable } from '@nestjs/common';
import { GetEthereumBodyDTO } from './dto/ethereum.dto';
import { CoingeckoService } from '../coingecko/coingecko.service';
import { EthereumLogic } from './ethereum.logic';
import { AddressType } from './types';
import { GetAddressesReturnType } from './types/get-addresses-return.type';

@Injectable()
export class EthereumService {
  constructor(private coinService: CoingeckoService) {}

  async getAddressesService(
    body: GetEthereumBodyDTO,
  ): Promise<GetAddressesReturnType> {
    const addresses = body.address;
    const wrongAddresses: string[] = [];
    const unsortedAddresses: AddressType[] = [];
    const successfulAddresses: string[] = [];

    for (const address of addresses) {
      if (EthereumLogic.isEthereumAddressValid(address)) {
        successfulAddresses.push(address);
      } else {
        wrongAddresses.push(address);
      }
    }

    for (const address of successfulAddresses) {
      unsortedAddresses.push({
        address,
        ethBalance: parseFloat(await this.coinService.getBalance(address)),
        usdBalance: 0,
      });
    }
    const price = await this.coinService.getPrice();
    const usdRate = parseFloat(JSON.parse(price).ethereum.usd);

    for (const address of unsortedAddresses) {
      address['usdBalance'] = address.ethBalance * usdRate;
    }

    return {
      wrongAddresses,
      sortedAddresses: EthereumLogic.sortAddressesByUsdRate(unsortedAddresses),
    };
  }
}
