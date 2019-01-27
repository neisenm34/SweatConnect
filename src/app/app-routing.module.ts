import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ConnectComponent } from './connect/connect.component';

const routes: Routes = [
  { path: 'my-profile', component: ProfileComponent },
  { path: 'connect', component: ConnectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
