import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
