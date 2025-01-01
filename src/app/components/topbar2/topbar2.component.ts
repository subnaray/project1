import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar2',
  imports: [MatIconModule, MatMenuModule ],
  templateUrl: './topbar2.component.html',
  styleUrl: './topbar2.component.css'
})
export class Topbar2Component {

  constructor( private router:Router) { }

  logout(){
    this.router.navigate(['/login']);
  }

}
