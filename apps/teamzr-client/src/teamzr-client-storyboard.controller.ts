import { Controller, Get } from '@nestjs/common';
import { TeamzrClientStoryboardService } from './teamzr-client-storyboard.service';

@Controller()
export class TeamzrClientStoryboardController {
  constructor(
    private readonly teamzrClientStoryboardService: TeamzrClientStoryboardService,
  ) {}

  @Get()
  getHello(): string {
    return this.teamzrClientStoryboardService.getHello();
  }
}
