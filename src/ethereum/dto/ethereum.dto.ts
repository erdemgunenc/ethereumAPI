import { IsArray, IsString, ArrayMinSize, ArrayUnique } from 'class-validator';
export class GetEthereumBodyDTO {
  @IsArray()
  @ArrayUnique()
  @ArrayMinSize(1)
  @IsString({ each: true })
  address: string[];
}
