import { Module } from '@nestjs/common';
import { TeamzrClientStoryboardController } from './teamzr-client-storyboard.controller';
import { TeamzrClientStoryboardService } from './teamzr-client-storyboard.service';

@Module({
  imports: [],
  controllers: [TeamzrClientStoryboardController],
  providers: [TeamzrClientStoryboardService],
})
export class TeamzrClientStoryboardModule {}
