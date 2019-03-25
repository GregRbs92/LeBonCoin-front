import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ListAdsComponent } from './pages/list-ads/list-ads.component';
import { CreateAdComponent } from './pages/create-ad/create-ad.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { UpdateAdComponent } from './pages/update-ad/update-ad.component';
import { DetailsAdComponent } from './pages/details-ad/details-ad.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListAdsComponent,
    CreateAdComponent,
    UpdateAdComponent,
    DetailsAdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
