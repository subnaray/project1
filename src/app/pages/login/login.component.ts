import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/user.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from '../../components/topbar/topbar.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    TopbarComponent
],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup; 

  // Removed the extra parenthesis in the constructor
  constructor(private fb: FormBuilder, public userService: UserService, private snackbar: MatSnackBar, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    // Check if the form is valid before proceeding
    if (this.loginForm.valid) {
      this.userService.getUser(this.loginForm.value.email).then((res: any) => {
        console.log(res);
        if (res.length == 0) {
          console.log("account does not exist");
          this.snackbar.open('Account does not exist', 'ok');
        } else {
          if (res[0].password === this.loginForm.value.password) {
            console.log("matched");
            this.snackbar.open('Login successful', 'ok');
            this.userService.user = res[0];
            localStorage.setItem('user', JSON.stringify(res[0]));
            this.router.navigate(['/posts']);
          } else {
            console.log("incorrect password");
            this.snackbar.open('Incorrect password', 'ok');
          }
        }
      }).catch((err) => {
        console.log(err);
      });
    } else {
      console.log("Form is invalid");
      this.snackbar.open('Please fill out the form correctly', 'ok');
    }
  }
}
