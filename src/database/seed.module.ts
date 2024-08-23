import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Space, Headquarter, SpaceType]),
  ],
  providers: [SeedService],
  exports: [SeedService],
})
export class SeedModule {}