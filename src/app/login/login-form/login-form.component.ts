import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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

  showLoad: boolean;

  constructor(
    private toastr: ToastsManager,
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  doLogin( event: Event ) {
    event.preventDefault();
    if (this.loginForm.valid) {
      this.login();
    }else {
      this.toastr.error('This is not good!', 'Oops!');
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

    this.showLoad = true;
    setTimeout(() => {
      this.showLoad = false;
      this.toastr.success('This is good!', 'Oops!', {
        positionClass: 'toast-bottom-right'
      });
      console.log(email, password);
    }, 5000);
  }

}
