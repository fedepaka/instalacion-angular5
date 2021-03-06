import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Task } from '../../models/task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input('task') taskAux: Task;
  public titulo: string;
  constructor(public dataService: DataService) {  }

  ngOnInit() {
    this.titulo = 'hola como estas';
    // console.log(JSON.stringify(this.taskAux));
  }
  removeTask(): void {
    // console.log(JSON.stringify(task));
    const response = confirm('Are you sure delete this item? ' + this.taskAux.title);
    if (response && this.taskAux !== null) {
       this.dataService.removeTask(this.taskAux);
    }
  }
}
