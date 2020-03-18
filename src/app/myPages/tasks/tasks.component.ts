import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  dataTable;

  ngOnInit() {
    this.apiService.getAllTasks()
    .subscribe( data => {
      console.log(data)
      this.dataTable=data;
    });
  }

}
