import { ApiProperty } from "@nestjs/swagger";

import { Player } from "./player.entity";
import { Role } from "./role.entity";

export class User {
  id: string;
  username: string;
  player?: Player | null;
  roles?: Role[];
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
