import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import config from '../config/configuration';

import * as Web3Utils from 'web3-utils';
import * as bigInt from 'big-integer';

@Injectable()
export class CoingeckoService {
  constructor(private httpService: HttpService) {}

  async ping(): Promise<string> {
    const url = config().coingecko.pingUrl;
    const { data }: any = await firstValueFrom(this.httpService.get(url));
    return JSON.stringify(data);
  }

  async getPrice(): Promise<string> {
    const serverResponse = true
      ? JSON.parse(await this.ping())['gecko_says'] == '(V3) To the Moon!'
      : false;
    if (serverResponse) {
      const url = config().coingecko.priceUrl;
      const { data }: any = await firstValueFrom(this.httpService.get(url));
      return JSON.stringify(data);
    }
    throw new NotFoundException('CoinGecko server is currently closed!');
  }

  async getBalance(address: string): Promise<string> {
    try {
      const url = config().coingecko.balanceUrl;
      const { data }: any = await firstValueFrom(
        this.httpService.post(url, {
          jsonrpc: '2.0',
          method: 'eth_getBalance',
          params: [`${address}`, 'latest'],
          id: 1,
        }),
      );
      const balance = Web3Utils.fromWei(
        bigInt(data.result.replace('0x', ''), 16).toString(),
        'ether',
      );
      return balance;
    } catch (err) {
      throw new NotFoundException('Could not get the Balance !');
    }
  }
}
