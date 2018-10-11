import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './components/contact/contact.component';
import {AboutComponent} from './components/about/about.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component : ContactComponent
  },
  {path: '', redirectTo: '/about', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
