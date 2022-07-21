import {
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @Max(999999)
  @Min(1)
  @IsInt()
  price: number;

  @IsNotEmpty()
  @MaxLength(50)
  @IsString()
  description: string;
}
