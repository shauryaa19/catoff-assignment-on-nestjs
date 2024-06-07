import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';
import * as bcrypt from "bcrypt"

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) {}

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        const hashedPassword = await bcrypt.hash(data.password, 10) // hashing password
        data.password = hashedPassword
        return this.prisma.user.create({ data })
    }

    async getUser(id: string ): Promise<User | null> {

        const userId = parseInt(id)  //converting id param from string url to number
        const user = await this.prisma.user.findUnique({ where: { id: userId } })
        if(!user) {
            throw new NotFoundException(`User with ID ${id} not found`)
        }
        return user
    }

    async getUsers(): Promise<User[]> {
        return this.prisma.user.findMany()
    }

    async updateUser(id: string, data: Prisma.UserUpdateInput): Promise<User> {
        const userId = parseInt(id)  //converting id param from string url to number
        if (data.password) {
            //@ts-ignore
            data.password =  bcrypt.hash(data.password, 10) // hashing password
        }
        try {
          return await this.prisma.user.update({ where: { id: userId }, data });
        } catch (error) {
          throw new NotFoundException(`User with ID ${id} not found`);
        }
    }

    async deleteUser(id: string): Promise<User> {
        const userId = parseInt(id)  //converting id param from string url to number
        try {
          return await this.prisma.user.delete({ where: { id: userId } });
        } catch (error) {
          throw new NotFoundException(`User with ID ${id} not found`);
        }
    }
}
