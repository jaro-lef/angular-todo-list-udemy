import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //  config: {[key:string]:string|Date};
 config:any;
 taskName = 'cos na start';
 taskDate = '';
 editMode = false;

 tasks: Task[] = [
    {
      name:'zakupy',
      deadline:'2021-10-11',
      done:false,
    },
    {
      name:'zakupy1',
      deadline:'2020-11-02',
      done:false,
    },
    {
      name:'zakupy2',
      deadline:'2026-02-24',
      done:true,
    }
  
 ];
  
  constructor(){
    setTimeout(()=>{
      this.config = {
        title: 'Lista zadań',
        footer: 'Lista zadań zbudowana w Angularze',
        date: new Date(),
      }
    },500);
    this.sortTasks();
  }

  clearTasks(){
    this.tasks = [];
  }



  onTaskCreate(){
    const task: Task = {
      name : this.taskName,
      deadline: this.taskDate, 
      done: false
    }
    this.tasks.push(task);
    this.taskName='';
    this.taskDate=''; 
    this.sortTasks();
  }

  switchEditMode(){
    this.editMode = !this.editMode;
  }

  markTaskAsDone(task:Task){
    task.done = true;
    this.sortTasks();
  }

  deleteTask(task:Task){
    this.tasks = this.tasks.filter(e => e !== task);
    this.sortTasks();
  }

  private sortTasks(){
    this.tasks.sort(
      (a: Task, b:Task)=> a.done===b.done?0:a.done?1:-1

    );

  }

}
