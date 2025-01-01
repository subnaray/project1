import { Component } from '@angular/core';
import { Topbar2Component } from '../../components/topbar2/topbar2.component';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { MatFormField } from '@angular/material/form-field';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-posts',
  imports: [Topbar2Component, MatFormField, MatCard, MatCardActions, MatCardContent, MatIcon, MatCardTitle, MatCardHeader],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  constructor(public userService:UserService, private router:Router) {}

  ngOnInit(): void {
    if(this.userService.user == undefined || this.userService.user == null){
      let str = localStorage.getItem('user');
      if(str != null){
        this.userService.user = JSON.parse(str);
      }
      else{
        this.router.navigate(['/login']);
      }
    }
  }
}
