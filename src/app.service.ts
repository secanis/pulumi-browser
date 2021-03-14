import { Injectable } from '@nestjs/common';
import { InjectS3, S3 } from 'nestjs-s3';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
    private pulumiBucket: string;

    constructor(
        @InjectS3() private readonly s3: S3,
        private readonly config: ConfigService,
    ) {
        this.pulumiBucket = this.config.get<string>('bucket');
    }

    async readStacks() {
        const bucket = await this.s3
            .listObjectsV2({ Bucket: this.pulumiBucket })
            .promise();
        const stacks = bucket.Contents.filter(
            (c) => c.Key.includes('/stacks/') && !c.Key.includes('.json.bak'),
        );
        const manipulatedData = stacks.map((s) => {
            const myRegexp = /.*\/(stacks)\/([a-zA-Z-_]+)\/(.*)\/(.*).json/g;
            const match = myRegexp.exec(s.Key);

            return {
                organization: match[2],
                project: match[3],
                stack: match[4],
                path: s.Key,
            };
        });
        return manipulatedData;
    }
}
