import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
// Uncomment these imports if the components are being used
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { PostsComponent } from './pages/posts/posts.component';
// import { PostsComponent } from './pages/posts/posts.component';

export const routes: Routes = [
  // Uncomment this line if you want to redirect empty path to 'login'
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'posts', component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Import the routes into the app
  exports: [RouterModule], // Export RouterModule to make it available in AppModule
})
export class AppRoutingModule {}