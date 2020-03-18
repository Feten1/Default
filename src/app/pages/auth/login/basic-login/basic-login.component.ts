import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../../api.service';


@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {
  
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private route: Router, private apiService : ApiService) { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
    this.addForm = this.formBuilder.group({
      username : ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(){
    console.log(this.addForm.value); 
    var  username = this.addForm.value.username
  
    this.apiService.getTasksByUser(username)
      .subscribe(data => {
      
        console.log(data)
      });
  
  this.route.navigate(['/dashboard'])
  }

}
