import { Component, Output } from '@angular/core';
import { ITask } from './table/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hometask3';
  public taskArr: Array<ITask> = [
    {newTask : 'angular',status : true},
    {newTask : 'react',status : true},
    {newTask : 'HTML',status : true},
  ];
  public placeholder = 'Write task';
  public editPlaceholder = 'Write task'
  public task !: string;
  public editIndex !: number;
  public isEdit = false;
  public editTask!: string;

  public makeObj(): void {
    let obj = new taskObj(this.task, true)
    this.taskArr.push(obj);
  }

  public addTask(): void {
    if (this.task) {
      this.makeObj();
      this.task = '';
      this.placeholder = 'Write task'
    } else {
      this.task = '';
      this.placeholder = 'Write any task!'
    }
  }

  getEdit(index: number): void {
    this.editTask = this.taskArr[index].newTask;
    this.editIndex = index;
    this.isEdit = true;
  }

  changeTask() {
    if (this.editTask) {
      this.taskArr[this.editIndex].newTask = this.editTask;
      this.taskArr[this.editIndex].status = true;
      this.isEdit = false;
      this.editTask = '';
    }
    this.editTask = '';
    this.editPlaceholder = 'Write any task!'
  }
}

class taskObj {
  newTask: string;
  status: boolean;
  constructor(task: string, status: boolean) {
    this.newTask = task;
    this.status = status;
  }
}
