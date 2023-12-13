import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactRoutingModule } from './contact/contact-routing.module';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
