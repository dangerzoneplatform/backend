import { CreateAuthDto } from "@app/auth";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateAuthDto extends PartialType(CreateAuthDto) {}
