import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ListAdsComponent } from './pages/list-ads/list-ads.component';
import { CreateAdComponent } from './pages/create-ad/create-ad.component';
import { AuthGuard } from './guards/auth.guard';
import { UpdateAdComponent } from './pages/update-ad/update-ad.component';
import { DetailsAdComponent } from './pages/details-ad/details-ad.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/ads'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'ads',
    component: ListAdsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ads/create',
    component: CreateAdComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ads/:id/update',
    component: UpdateAdComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ads/:id',
    component: DetailsAdComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
