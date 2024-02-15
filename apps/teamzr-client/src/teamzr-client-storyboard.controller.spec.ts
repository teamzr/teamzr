import { Test, TestingModule } from '@nestjs/testing';
import { TeamzrClientStoryboardController } from './teamzr-client-storyboard.controller';
import { TeamzrClientStoryboardService } from './teamzr-client-storyboard.service';

describe('TeamzrClientStoryboardController', () => {
  let teamzrClientStoryboardController: TeamzrClientStoryboardController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TeamzrClientStoryboardController],
      providers: [TeamzrClientStoryboardService],
    }).compile();

    teamzrClientStoryboardController = app.get<TeamzrClientStoryboardController>(TeamzrClientStoryboardController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(teamzrClientStoryboardController.getHello()).toBe('Hello World!');
    });
  });
});
