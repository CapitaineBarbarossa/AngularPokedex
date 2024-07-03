import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // name = new FormControl('', [Validators.required]);
  login = new FormControl('', );
  password = new FormControl('', );

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  })

  updateName() {
    console.log(this.login.value, this.password.value);
  }

  onSubmit(){
    console.log(this.profileForm.value,
      this.profileForm.value.firstName,
      this.profileForm.value.lastName)
  }
}
