import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { TasksService } from './task.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: number): Task {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() task: Task): Task {
    return this.tasksService.createTask(task);
  }

  @Put(':id')
  updateTask(@Param('id') id: number, @Body() updatedTask: Task): Task {
    return this.tasksService.updateTask(id, updatedTask);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number): Task {
    return this.tasksService.deleteTask(id);
  }
}
