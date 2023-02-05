import { Controller, Post, Body, HttpStatus } from '@nestjs/common';
import { GetEthereumBodyDTO } from './dto/ethereum.dto';
import { EthereumService } from './ethereum.service';
import { ApiResponse } from '@nestjs/swagger';
import { Ethereum } from './entities/ethereum.entity';
import { GetAddressesReturnType } from './types/get-addresses-return.type';

@Controller('ethereum')
export class EthereumController {
  constructor(private ethereumService: EthereumService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Ethereum Balance API',
    type: Ethereum,
  })
  getAddressesCtrl(
    @Body() body: GetEthereumBodyDTO,
  ): Promise<GetAddressesReturnType> {
    return this.ethereumService.getAddressesService(body);
  }
}
