import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CustomerGoogleDto {
    @ApiProperty({
        description: "First name of the customer",
        required: true,
        type: "string",
        example: "Nguyen Tran"
    })
    @IsString()
    @IsOptional()
    first_name?: string;
    @ApiProperty({
        description: "Last name of the customer",
        required: true,
        type: "string",
        example: "Hoang Thien"
    })
    @IsString()
    @IsOptional()
    last_name?: string;

    @ApiProperty({
        description: "Last name of the customer",
        required: true,
        type: "string",
        example: "vongola392112@gmail.com"
    })
    @IsEmail()
    @IsOptional()
    email?: string;

    @ApiProperty({
        description: "Phone number of the customer",
        required: true,
        type: "string",
        example: "012345"
    })
    @IsString()
    @IsOptional()
    phone_number?: string;

    @ApiProperty({
        description: "Username of the customer",
        required: true,
        type: "string",
        example: "Thien Nguyen"
    })
    @IsString()
    @IsOptional()
    username?: string;
}
