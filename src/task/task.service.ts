import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number): Task {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(task: Task): Task {
    task.id = this.generateId();
    this.tasks.push(task);
    return task;
  }

  updateTask(id: number, updatedTask: Task): Task {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);

    if (taskIndex !== -1) {
      this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updatedTask };
      return this.tasks[taskIndex];
    }

    return null;
  }

  deleteTask(id: number): Task {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);

    if (taskIndex !== -1) {
      const deletedTask = this.tasks[taskIndex];
      this.tasks.splice(taskIndex, 1);
      return deletedTask;
    }

    return null;
  }

  private generateId(): number {
    return this.tasks.length > 0
      ? Math.max(...this.tasks.map((task) => task.id)) + 1
      : 1;
  }
}
