import { Component } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent{
  task: string;
  sendTask: string;
  sendArrTasks: Array<object> = [
    {
      nameOfTask: 'HTML',
      status: false,
    },
    {
      nameOfTask: 'Angular',
      status: false,
    },
    {
      nameOfTask: 'JavaScript',
      status: false,
    },
  ];
  count = this.sendArrTasks.length;
  send(): void {
    if (this.task != '') this.sendTask = this.task;
  }
  addTask(): void {
    this.send();
    if ( this.sendTask != ''){
      const task = {
        nameOfTask: this.sendTask,
        status: false,
      };
      this.count++;
      this.sendArrTasks.push(task);
      this.sendTask = '';
      this.task = '';   
    }
  }
  getStatus(check: boolean): void{
    if (check) this.count--;
  }
}