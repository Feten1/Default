import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,  private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  onSubmit() {
   
    var user = {
      "profile":
      {
        "id": this.addForm.value.id,
        "firstName": this.addForm.value.firstName,
        "lastName": this.addForm.value.lastName,
        "email": this.addForm.value.email
      },
      "credentials":
        { "password": this.addForm.value.password }
    }

    console.log(user);
    this.apiService.createUser(user)
      .subscribe(data => {
        //this.router.navigate(['list-user']);
        console.log('success')
      });
  }


}
