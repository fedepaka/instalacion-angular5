import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {VideojuegosComponent} from './videojuegos/videojuegos.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { TaskAddComponent } from './componentes/task-add/task-add.component';
import { TaskListComponent } from './componentes/task-list/task-list.component';
import { TaskComponent } from './componentes/task/task.component';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegosComponent,
    NavbarComponent,
    TaskAddComponent,
    TaskListComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
