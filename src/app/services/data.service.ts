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
    if (task !== null) {
      this.tasks.unshift(task);

      let tasksAux;
      if (localStorage.getItem('tasks') === null) {
        tasksAux = [];
      } else {
        tasksAux = JSON.parse(localStorage.getItem('tasks'));
        tasksAux.unshift(task);
      }
      localStorage.setItem('tasks', JSON.stringify(tasksAux));
    }
  }

  removeTask(task: Task): void {
    let tasksAux;
    tasksAux = this.getTasks();

    const indexTask = tasksAux.findIndex(function (item) {
      return item.guid === task.guid;
    });
    if (indexTask >= 0) {
      tasksAux.splice(indexTask, 1);
      localStorage.setItem('tasks', JSON.stringify(tasksAux));
    }
  }
}
