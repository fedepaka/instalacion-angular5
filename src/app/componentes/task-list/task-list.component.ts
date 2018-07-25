import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.tasks = this.dataService.getTasks();
    // console.log(JSON.stringify(this.tasks));
  }

  addTask(task: Task) {
    this.dataService.addTask(task);
  }
}
