import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-spm',
  templateUrl: './spm.component.html',
  styleUrls: ['./spm.component.scss']
})
export class SpmComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  dataTable;

  ngOnInit() {
    this.apiService.getAllUsers()
    .subscribe( data => {
      console.log(data)
      this.dataTable=data;
    });
  }

  editUser(id){
    console.log(id)
  }


}
