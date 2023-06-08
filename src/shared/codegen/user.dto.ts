import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
  id: string;
  username: string;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  rating: number;
  premium: boolean;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  time_played: number;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  created_at: Date;
}
