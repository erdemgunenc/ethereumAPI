import { ApiProperty } from '@nestjs/swagger';

export class Ethereum {
  @ApiProperty({
    example: ['0x00000000219ab540356cBB839Cbe05303d7705Fa', 'invalidAddress'],
    description: 'The Address of Ethereum',
  })
  address: string[];
}
