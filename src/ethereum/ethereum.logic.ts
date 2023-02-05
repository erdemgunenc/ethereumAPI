import { SHA3 } from 'sha3';
import { AddressType } from './types';

const hash = new SHA3(512);

export class EthereumLogic {
  static isEthereumAddressValid(address: string): boolean {
    if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
      return false;
    } else if (
      /^(0x)?[0-9a-f]{40}$/.test(address) ||
      /^(0x)?[0-9A-F]{40}$/.test(address)
    ) {
      return true;
    } else {
      return this.checkSum(address);
    }
  }

  static checkSum(address: string): boolean {
    const removedAddress: any = address.replace('0x', '');
    const hashedAddress = hash.update(removedAddress.toLowerCase());
    for (let index = 0; index < 40; index++) {
      if (
        (parseInt(hashedAddress[index], 16) > 7 &&
          address[index].toUpperCase() !== address[index]) ||
        (parseInt(hashedAddress[index], 16) <= 7 &&
          address[index].toLowerCase() !== address[index])
      ) {
        return false;
      }
    }
    return true;
  }

  static sortAddressesByUsdRate(addresses: AddressType[]): AddressType[] {
    return addresses.sort((a, b) => b.usdBalance - a.usdBalance);
  }
}
