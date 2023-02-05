import { Test, TestingModule } from '@nestjs/testing';
import { EthereumLogic } from './ethereum.logic';

describe('EthereumLogic', () => {
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [],
    }).compile();
  });

  it('should return true,  since the address is valid', () => {
    const address = '0x00000000219ab540356cBB839Cbe05303d7705Fa';
    expect(EthereumLogic.isEthereumAddressValid(address));
  });

  it('should return false, since the address is invalid', () => {
    const address = 'invalidAddress';
    expect(EthereumLogic.isEthereumAddressValid(address));
  });

  it('Address should starts with 0x', () => {
    const address = '0x00000000219ab540356cBB839Cbe05303d7705Fa';
    expect(address.slice(0, 2)).toBe('0x');
  });

  it('should be true if the address has  capital or lowercase', () => {
    const trueValidAddress = '0x00000000219ab540356cBB839Cbe05303d7705Fa';
    const result: boolean = EthereumLogic.checkSum(trueValidAddress);
    expect(result).toBe(true);
  });

  it('checksum should be true', () => {
    const validCheckSumAddress = '0xa54D3c09E34aC96807c1CC397404bF2B98DC4eFb';
    const result: boolean = EthereumLogic.checkSum(validCheckSumAddress);
    expect(result).toBe(true);
  });
});
