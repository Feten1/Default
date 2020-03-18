import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  dataTable;

  ngOnInit() {
    this.apiService.getAllGroups()
    .subscribe( data => {
      console.log(data)
      this.dataTable=data;
    });
  }

}
