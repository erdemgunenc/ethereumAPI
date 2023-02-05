import { Module } from '@nestjs/common';
import { EthereumModule } from './ethereum/ethereum.module';
import { CoingeckoModule } from './coingecko/coingecko.module';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    EthereumModule,
    CoingeckoModule,
    CoingeckoModule,
    HttpModule,
  ],
  providers: [],
})
export class AppModule {}
