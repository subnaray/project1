import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-account',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent implements OnInit{
   
  createAccountForm! : FormGroup; 

  constructor(private fb:FormBuilder) {}
  
  ngOnInit(): void {
    this.createAccountForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(10)]], 
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

}
