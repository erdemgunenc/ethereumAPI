import { Test, TestingModule } from '@nestjs/testing';
import { EthereumService } from './ethereum.service';
import { CoingeckoService } from '../coingecko/coingecko.service';
import { HttpModule } from '@nestjs/axios';
describe('EthereumService', () => {
  let service: EthereumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [EthereumService, CoingeckoService],
    }).compile();

    service = module.get<EthereumService>(EthereumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
