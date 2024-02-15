import { Injectable } from '@nestjs/common';

@Injectable()
export class TeamzrClientStoryboardService {
  getHello(): string {
    return 'Hello World!';
  }
}
