import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { MycrudeModule } from "./mycrude/mycrude.module";
import config from "./configuration";
// import { MycrudeController } from "./mycrude/mycrude.controller";

@Module({
  imports: [
    MycrudeModule,
    ConfigModule.forRoot({
      envFilePath: ".env",
      load: [config],
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      extra: {
        connectionLimit: process.env.POOL_SIZE,
      },
      // synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
