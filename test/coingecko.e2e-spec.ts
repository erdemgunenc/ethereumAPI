import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import config from '../src/config/configuration';

describe('Coingecko Controller E2E Test', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('should ping the CoinGecko to sure if the API works.', async () => {
    const pingUrl = config().coingecko.pingUrl;
    const response: any = JSON.stringify(await request(pingUrl).get('/'));
    const jsonResponse = JSON.parse(response);
    expect(JSON.parse(jsonResponse['text'])['gecko_says']).toBe(
      '(V3) To the Moon!',
    );
  });
});
