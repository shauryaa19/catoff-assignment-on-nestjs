import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { WalletAddressModule } from './wallet-address/wallet-address.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModule, WalletAddressModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
