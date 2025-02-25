import { Component } from '@angular/core';
import { DummyService } from './services/dummy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'API_calling';
  toDo :any[] = [];
task: any;

  constructor(private dummyService:DummyService) {  

  }
  getData(){

     //call service  for get all data using  API callinng
   this.dummyService.getAllDAta().subscribe((data =>{
    this.toDo=data.todos;
console.log(data);

   }))

  }
}
