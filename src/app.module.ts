import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { DatabaseModule } from './database.module';


@Module({
  imports: [
    DatabaseModule,
    UsersModule, 
    AuthModule, 
    ProductsModule, 
    OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
