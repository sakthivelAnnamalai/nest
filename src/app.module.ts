import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { LoginModule } from './login/login.module';
import config from './configuration'

@Module({

 
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load:[config],
      isGlobal: true, 
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      extra: {
        connectionLimit: process.env.POOL_SIZE
      },
      // synchronize: true,
      autoLoadEntities: true,
    }),

    LoginModule,

    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
