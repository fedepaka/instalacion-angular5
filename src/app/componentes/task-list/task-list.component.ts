import {Component, OnInit} from '@angular/core';

// import { DataService } from '../../services/data.service';
import {Task} from '../../models/task';
import {TasksService} from '../../services/tasks.service';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  constructor(public taskService: TasksService) {
  }

  ngOnInit() {
    // this.tasks = this.dataService.getTasks();
    // this.tasks = this.taskService.getTask();
    // console.log(this.taskService.getTask());
    this.getUsers();
  }

  addTask(task: Task) {
    // this.dataService.addTask(task);
    debugger;
    this.taskService.addTask(task).subscribe(data => {
      console.log(data);
    });
  }

  getUsers() {
    this.taskService.getTask().subscribe(data => {
      console.log(data);
      const list = data.response as Task[];
      this.tasks = list;
    });
  }
}
