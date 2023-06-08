import { ApiProperty, getSchemaPath } from "@nestjs/swagger";

export class CreatePlayerDto {
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  id: number;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  level: number;
  rank: string;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  played_seconds: number;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  last_seen: number;
  online: boolean;
}
