import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import {FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(){
    console.log('this.loginForm.controls :>> ', this.loginForm.controls);
  }
}
