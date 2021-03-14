import { Module, Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { S3Module } from 'nestjs-s3';

import configuration from './configuration/configuration';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
        }),
        S3Module.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (config: ConfigService) => ({
                config: {
                    endpoint: config.get('endpoint'),
                    accessKeyId: config.get('access_id'),
                    secretAccessKey: config.get('secret_key'),
                    s3ForcePathStyle: true,
                    signatureVersion: 'v4',
                },
            }),
            inject: [ConfigService],
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor(private config: ConfigService) {
        if (this.config.get('endpoint') && this.config.get('bucket')) {
            Logger.log(
                `configured S3 url:             ${this.config.get('endpoint')}`,
                'Configuration',
            );
            Logger.log(
                `configured S3 bucket:          ${this.config.get('bucket')}`,
                'Configuration',
            );
        } else {
            Logger.error(
                'configured S3 url:             not configured!',
                null,
                'Error',
            );
            Logger.error(
                'configured S3 bucket:          not configured!',
                null,
                'Error',
            );
        }
    }
}
