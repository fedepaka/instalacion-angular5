import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { Task } from '../models/task';
import { of } from 'rxjs/observable/of';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class TasksService {

  private tasksUrl;
  constructor (private http: HttpClient) {
    this.tasksUrl = 'http://localhost:4003/api/v1/tasks';
  }

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl)
      .pipe(
        tap(heroes => this.log(`fetched tasks`)),
        catchError(this.handleError('getTasks', []))
      );
  }

  getTaskById(id: number): Observable<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get<Task>(url).pipe(
      tap(_ => this.log(`fetched task id=${id}`)),
      catchError(this.handleError<Task>(`getTask id=${id}`))
    );
  }

  addTask (task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task, httpOptions).pipe(
      tap((myTask: Task) => this.log(`added Task w/ id=${myTask.idTask}`)),
      catchError(this.handleError<Task>('addTask'))
    );
  }

  deleteUser (id: string): Observable<Task> {
    const url = `${this.tasksUrl}/${id}`;

    return this.http.delete<Task>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted task id=${id}`)),
      catchError(this.handleError<Task>('deleteTask'))
    );
  }

  updateUser (task: Task): Observable<null> {
    return this.http.put(this.tasksUrl, task, httpOptions).pipe(
      tap(_ => this.log(`updated task id=${task.idTask}`)),
      catchError(this.handleError<any>('updateTask'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('TasksService: ' + message);
  }
}
