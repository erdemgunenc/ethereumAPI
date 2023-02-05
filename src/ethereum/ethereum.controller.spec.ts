import { HttpModule } from '@nestjs/axios';
import { NotFoundException } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import configuration from '../config/configuration';
import { CoingeckoService } from '../coingecko/coingecko.service';
import { GetEthereumBodyDTO } from './dto/ethereum.dto';
import { EthereumController } from './ethereum.controller';
import { EthereumModule } from './ethereum.module';
import { EthereumService } from './ethereum.service';

describe('EthereumController', () => {
  let controller: EthereumController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule,
        EthereumModule,
        ConfigModule.forRoot({
          load: [configuration],
          isGlobal: true,
        }),
      ],

      controllers: [EthereumController],
      providers: [EthereumService, CoingeckoService],
    }).compile();

    controller = module.get<EthereumController>(EthereumController);
  });

  it('should be valid data', async () => {
    const data: GetEthereumBodyDTO = { address: ['invalidAddress'] };
    controller
      .getAddressesCtrl(data)
      .then((data) => {
        expect(data['wrong_addresses'].includes('invalidAddress')).toBe(true);
      })
      .catch((err) => {
        throw new NotFoundException(err);
      });
  });
});
