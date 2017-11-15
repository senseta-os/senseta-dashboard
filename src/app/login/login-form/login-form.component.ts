import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  emailField: FormControl;
  passwordField: FormControl;

  constructor() {
    this.buildForm();
  }

  ngOnInit() {
  }

  doLogin( event: Event ) {
    event.preventDefault();
    if (this.loginForm.valid) {
      this.login();
    }else {
      this.emailField.markAsDirty();
      this.passwordField.markAsDirty();
    }
  }

  private buildForm() {
    this.emailField = new FormControl('', [Validators.required, Validators.email]);
    this.passwordField = new FormControl('', [Validators.required]);

    this.loginForm = new FormGroup({
      email: this.emailField,
      password: this.passwordField,
    });
  }

  private login() {
    const email = this.emailField.value;
    const password = this.passwordField.value;
    console.log(email, password);
  }

}
