import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { readFileSync } from 'fs';
import { join } from 'path';

@Controller('healthcheck')
export class HealthController {
    private readonly version: string;

    constructor(private readonly configService: ConfigService) {
        const packageJson = JSON.parse(
            readFileSync(join(process.cwd(), 'package.json'), 'utf8')
        );
        this.version = packageJson.version;
    }

    @Get()
    getHealthcheck() {
        const env = this.configService.get<string>('ENVIRONMENT') || 'dev';

        return {
            status: 'OK',
            env,
            version: this.version
        };
    }
}
