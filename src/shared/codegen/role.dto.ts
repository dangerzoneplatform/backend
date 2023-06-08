import { ApiProperty } from "@nestjs/swagger";

export class RoleDto {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  created_at: Date;
}
