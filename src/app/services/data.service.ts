import { Injectable } from '@angular/core';

import { Task } from '../models/task';

@Injectable()
export class DataService {
  // propiedades
  tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  // métodos
  getTasks(): Task[] {
    if (localStorage.getItem('tasks') === null) {
      this.tasks = [];
    } else {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return this.tasks;
  }

  addTask(task: Task): void {
    if (task === null) {
      return;
    }
    this.tasks.unshift(task);
    let tasksAux;
    tasksAux = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasksAux.unshift(task);
    localStorage.setItem('tasks', JSON.stringify(tasksAux));
  }

  removeTask(task: Task): void {
    const indexTask = this.tasks.findIndex(function (item) {
      return item.idTask === task.idTask;
    });
    if (indexTask >= 0) {
      this.tasks.splice(indexTask, 1);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
}
