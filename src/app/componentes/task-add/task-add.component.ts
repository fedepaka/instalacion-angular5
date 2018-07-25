import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import { Task } from '../../models/task';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  title: string;
  description: string;
  guid: string;
  @Output() taskAdded = new EventEmitter<Task>();
  constructor() { }

  ngOnInit() {
  }

  addTask(): void {
    // se envían los datos al control padre y se limpian los campos
    this.taskAdded.emit(
      {
        title: this.title,
        description: this.description,
        guid: Date.now()
      }
    );
    this.title = '';
    this.description = '';
    this.guid = '';
  }
}
