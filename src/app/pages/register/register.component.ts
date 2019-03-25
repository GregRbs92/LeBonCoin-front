import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.scss', './register.component.scss']
})
export class RegisterComponent {

  firstName = new FormControl('', Validators.required);
  lastName = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  form = new FormGroup({
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    password: this.password
  });

  constructor(private auth: AuthService, private router: Router) { }

  onSubmit() {
    if (!this.form.valid) {
      alert('Form is invalid');
      return;
    }

    this.auth.register(this.firstName.value, this.lastName.value, this.email.value, this.password.value)
    .subscribe(() => {
      this.router.navigateByUrl('/login');
    }, err => {
      alert(err.error.message);
    });
  }

}
