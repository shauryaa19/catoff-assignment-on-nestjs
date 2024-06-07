import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode } from '@nestjs/common';
import { WalletAddressService } from './wallet-address.service';
import { Prisma } from '@prisma/client';

@Controller('wallet-address')
export class WalletAddressController {
    constructor(private walletAddressService: WalletAddressService) {}

    // creating a new wallet for the user
    @Post()
    @HttpCode(201)
    async createWalletAddress(@Body() data: Prisma.WalletAddressCreateInput) {
        return this.walletAddressService.createWalletAddress(data);
    }

    // getting wallet data of specific id
    @Get(':id')
    @HttpCode(200)
    async getWalletAddress(@Param('id') id: string) {
        return this.walletAddressService.getWalletAddress(id);
    }

    // getting all the wallets
    @Get()
    @HttpCode(200)
    async getWalletAddresses() {
        return this.walletAddressService.getWalletAddresses();
    }

    // updating data on wallets
    @Put(':id')
    @HttpCode(200)
    async updateWalletAddress(@Param('id') id: string, @Body() data: Prisma.WalletAddressUpdateInput) {
        return this.walletAddressService.updateWalletAddress(id, data);
    }

    // deleting the wallet
    @Delete(':id')
    @HttpCode(204)
    async deleteWalletAddress(@Param('id') id: string) {
        return this.walletAddressService.deleteWalletAddress(id);
    }
}
