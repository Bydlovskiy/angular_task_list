import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from './user.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() taskArr: Array<ITask> = [];
  @Input() isEdit!: boolean;
  @Output() editObject = new EventEmitter();
  constructor() { }
  ngOnInit(): void {

  }

  public changeStatus(task: ITask): void {
    task.status = !task.status;
  }

  public deleteTask(i: number) {
    this.taskArr.splice(i, 1)
  }

  public editTask(i: number) {
    this.editObject.emit(i);
  }
}
