import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  form = new FormGroup({
    email: this.email,
    password: this.password
  });

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.form.valid) {
      alert('Form is not valid');
      return;
    }

    this.auth.login(this.email.value, this.password.value)
    .subscribe(() => {
      this.router.navigateByUrl('/ads');
    }, err => {
      alert(err.error.message);
    });
  }
}
