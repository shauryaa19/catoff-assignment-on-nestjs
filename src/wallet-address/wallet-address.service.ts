import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { WalletAddress, Prisma } from '@prisma/client';

@Injectable()
export class WalletAddressService {
    constructor(private prisma: PrismaService) {}

    async createWalletAddress(data: Prisma.WalletAddressCreateInput): Promise<WalletAddress> {
        return this.prisma.walletAddress.create({ data });
    }

    async getWalletAddress(id: string): Promise<WalletAddress | null> {
        const userId = parseInt(id)  //converting id param from string url to number
        const walletAddress = await this.prisma.walletAddress.findUnique({ where: { id: userId } });
        if (!walletAddress) {
        throw new NotFoundException(`WalletAddress with ID ${id} not found`);
        }
        return walletAddress;
    }
    async getWalletAddresses(): Promise<WalletAddress[]> {
        return this.prisma.walletAddress.findMany();
    }

    async updateWalletAddress(id: string, data: Prisma.WalletAddressUpdateInput): Promise<WalletAddress> {
        const userId = parseInt(id)  //converting id param from string url to number
        try {
            return await this.prisma.walletAddress.update({ where: { id: userId }, data });
        } catch (error) {
            throw new NotFoundException(`WalletAddress with ID ${id} not found`);
        }
    }

    async deleteWalletAddress(id: string): Promise<WalletAddress> {
        const userId = parseInt(id)  //converting id param from string url to number
        try {
          return await this.prisma.walletAddress.delete({ where: { id: userId } });
        } catch (error) {
          throw new NotFoundException(`WalletAddress with ID ${id} not found`);
        }
    }
}
