import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {PesapalPaymentComponent} from './pesapal-payment/pesapal-payment.component';
import {SuccessComponent} from './success/success.component';
import {AdminComponent} from './admin/admin.component';


const routes: Routes = [
  { path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
  },
  {path: 'homepage', component: HomepageComponent},
  {path: 'pesapal', component: PesapalPaymentComponent},
  {path: 'success', component: SuccessComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
