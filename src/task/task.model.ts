export class Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;

  constructor(title: string, description: string, completed: boolean) {
    this.id = Task.generateId();
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.createdAt = new Date();
  }

  private static generateId(): number {
    // This is a simple example; you may want to use a more sophisticated ID generation logic
    return Math.floor(Math.random() * 1000) + 1;
  }
}
