import { ApiProperty } from "@nestjs/swagger";

import { User } from "./user.entity";

export class Role {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  created_at: Date;
  user?: User;
  user_id: string;
}
