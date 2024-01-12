import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './task.controller';
import { TasksService } from './task.service';
import { Task } from './task.model';

describe('TasksController', () => {
  let tasksController: TasksController;
  let tasksService: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TasksService],
    }).compile();

    tasksController = module.get<TasksController>(TasksController);
    tasksService = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(tasksController).toBeDefined();
  });

  describe('getAllTasks', () => {
    it('should return an array of tasks', () => {
      const result: Task[] = [
        {
          id: 1,
          title: 'Task 1',
          description: 'Description 1',
          completed: false,
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Task 2',
          description: 'Description 2',
          completed: true,
          createdAt: new Date(),
        },
      ];

      jest.spyOn(tasksService, 'getAllTasks').mockImplementation(() => result);

      expect(tasksController.getAllTasks()).toBe(result);
    });
  });
});
