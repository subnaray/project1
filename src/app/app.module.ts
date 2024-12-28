import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { LoginComponent } from './pages/login/login.component';
// Uncomment and import additional components or modules as needed
import { CreateAccountComponent } from './pages/create-account/create-account.component';
// import { PostsComponent } from './pages/posts/posts.component';
   import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
   import { MatFormFieldModule } from '@angular/material/form-field';
   import { MatInputModule } from '@angular/material/input';
   import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { MatIconModule } from '@angular/material/icon';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatCardModule } from '@angular/material/card';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { environment } from 'src/environments/environment';
// import { MaterialFileInputModule } from 'ngx-material-file-input';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent, 
    LoginComponent,
    // Add additional components as needed
    CreateAccountComponent,
    // PostsComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    // Add additional modules as needed
       BrowserAnimationsModule,
       MatFormFieldModule,
       MatInputModule,
       ReactiveFormsModule,
       FormsModule,
    // HttpClientModule,
    // MatSnackBarModule,
    // MatIconModule,
    // MatMenuModule,
    // MatCardModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // MaterialFileInputModule,
    // AngularFireStorageModule,
    RouterModule.forRoot([]), // Define routes here or import AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

