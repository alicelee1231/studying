import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeModule } from './apis/home/home.module';
import { MainModule } from './apis/main/main.module';
import { UsageModule } from './apis/usage/usage.module';
import { WriteModule } from './apis/write/write.module';
import { UpdateModule } from './apis/update/update.module';
import { DetailModule } from './apis/detail/detail.module';
import { UserModule } from './apis/user/user.module';
import { AuthModule } from './apis/auth/auth.module';
import { RedisClientOptions } from 'redis';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    HomeModule,
    MainModule,
    UsageModule,
    AuthModule,
    UpdateModule,
    WriteModule,
    UserModule,
    DetailModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'my-database',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mvc',
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true,
      timezone: 'Asia / Seoul',
    }),
    CacheModule.register<RedisClientOptions>({
      store: redisStore,
      url: 'redis://172.18.17.3:6379',
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
