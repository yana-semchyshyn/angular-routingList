import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-taskchild',
  templateUrl: './taskchild.component.html',
  styleUrls: ['./taskchild.component.scss']
})
export class TaskchildComponent implements OnInit {
  @Input() getTask: string;
  @Input() getArrTasks: Array<object>;
  @Output() check: EventEmitter<boolean> = new EventEmitter<boolean>();
  isChecked = false;
  isEdited = false;
  isDisabled = 'disabled';
  editIndex: number;
  editTaskName: string;
  taskIndex: number;
  constructor() { }
  ngOnInit(): void {
  }
  deleteTask(index: number, status: boolean): void {
    this.getArrTasks.splice(index, 1);
    this.check.emit(status);
  }
  editTask(i: number) {
    const taskToEdit = this.getArrTasks[i];
    this.isEdited = true;
    this.editTaskName = taskToEdit['nameOfTask'];
    this.taskIndex = i;
  }
  saveTask(): void {
    if (this.editTaskName != ''){
      this.getArrTasks[this.taskIndex]['nameOfTask'] = this.editTaskName;
      this.editTaskName = '';
      this.taskIndex = null;
      this.isEdited = !this.isEdited;
    }
  }
  getArr(i: number){
    this.getArrTasks[i]['status'] = !this.getArrTasks[i]['status'];
  }
}