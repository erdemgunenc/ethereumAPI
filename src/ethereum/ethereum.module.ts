import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CoingeckoService } from '../coingecko/coingecko.service';
import { EthereumController } from './ethereum.controller';
import { EthereumService } from './ethereum.service';

@Module({
  imports: [HttpModule],
  controllers: [EthereumController],
  providers: [EthereumService, CoingeckoService],
})
export class EthereumModule {}
