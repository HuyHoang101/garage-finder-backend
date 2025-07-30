import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { CarModule } from './car/car.module';
import { GarageModule } from './garage/garage.module';
import { RateModule } from './rate/rate.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'oracle',
        host: process.env.DB_HOST ?? 'localhost',
        port: parseInt(process.env.DB_PORT ?? '1512', 10),
        username: process.env.DB_USERNAME ?? 'defaultUser',
        password: process.env.DB_PASSWORD ?? 'defaultPassword',
        database: process.env.DB_NAME ?? 'defaultDB',
        synchronize: true, // Set to false in production
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
      }),
    }),
    UserModule, // Importing UserModule
    PostModule, // Importing PostModule
    CommentModule, // Importing CommentModule
    CarModule,  // Importing CarModule
    GarageModule, // Importing GarageModule
    RateModule, // Importing RateModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}