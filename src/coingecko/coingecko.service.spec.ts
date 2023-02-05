import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { CoingeckoService } from './coingecko.service';
import configuration from '../config/configuration';

describe('CoingeckoService', () => {
  let service: CoingeckoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule,
        ConfigModule.forRoot({
          load: [configuration],
          isGlobal: true,
        }),
      ],
      providers: [CoingeckoService],
    }).compile();

    service = module.get<CoingeckoService>(CoingeckoService);
  });

  it('should work', () => {
    expect(service).toBeDefined();
  });

  it('should get the balance successfuly', () => {
    service
      .getBalance('0x00000000219ab540356cBB839Cbe05303d7705Fa')
      .then((balance) => {
        expect(typeof balance).toBe('string');
      });
  });
  it('should be equal to zero since there is no balance in this address', () => {
    service
      .getBalance('0x2698f4fb4b7fe5b9ad7aab6cb1c409bceb0099b1')
      .then((balance) => {
        expect(balance).toBe('0');
      });
  });
});
