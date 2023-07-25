import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
//   constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mycv',
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      subscribers: [__dirname + '/../**/*.subscriber.{js,ts}'],
      // synchronize: true,
      charset: 'utf8mb4_unicode_ci',
      logging: true,
      legacySpatialSupport: false,
      namingStrategy: new SnakeNamingStrategy(),
      extra: {
        connectionLimit: 20,
        waitForConnections: true,
        queueLimit: 1000,
      },
    };
  }
}
