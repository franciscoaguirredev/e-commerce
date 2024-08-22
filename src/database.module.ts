import { Module} from "@nestjs/common";
import { DatabaseConfigService } from "./common/config/connection-db.config";
import { TypeOrmModule } from "@nestjs/typeorm";



@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfigService,
    }),
    // SeedModule
  ],
  providers: [DatabaseConfigService],
  exports: [DatabaseConfigService],
})

export class DatabaseModule{}

// export class DatabaseModule implements OnModuleInit {
//   constructor(private readonly seedService: SeedService) {}

//   async onModuleInit() {
//     await this.seedService.seed();
//   }
// }