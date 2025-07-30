// src/user/dto/update-user.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
// This DTO extends CreateUserDto, allowing for partial updates to user properties.
// It inherits all properties from CreateUserDto, making them optional for updates.
// This is useful for scenarios where you want to update only a subset of user properties without requiring all fields to be provided.