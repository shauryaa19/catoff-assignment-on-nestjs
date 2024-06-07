import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    
    // creating user
    @Post()
    @HttpCode(201)
    async createUser(@Body() data: Prisma.UserCreateInput) {
        return this.usersService.createUser(data);
    }

    // fetching any specific user
    @Get(':id')
    @HttpCode(200)
    async getUser(@Param('id') id: string) {
        return this.usersService.getUser(id);
    }

    //fetching all the users
    @Get()
    @HttpCode(200)
    async getUsers() {
        return this.usersService.getUsers();
    }

    // updating the user data
    @Put(':id')
    @HttpCode(200)
    async updateUser(@Param('id') id: string, @Body() data: Prisma.UserUpdateInput) {
        return this.usersService.updateUser(id, data);
    }

    // deleting user
    @Delete(':id')
    @HttpCode(204)
    async deleteUser(@Param('id') id: string) {
        return this.usersService.deleteUser(id);
    }
}
