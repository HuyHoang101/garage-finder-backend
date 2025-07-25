import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from 'prisma/prisma.module';
import { RateModule } from './rate/rate.module';
import { PostModule } from './post/post.module';
import { GarageModule } from './garage/garage.module';
import { CommentModule } from './comment/comment.module';
import { CarModule } from './car/car.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    RateModule,
    PostModule,
    GarageModule,
    CommentModule,
    CarModule
  ],
})
export class AppModule {}
