import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { FrameworkComponent } from './framework/framework.component';

import {APP_BASE_HREF} from '@angular/common';
import {RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    HomePageComponent,
    FrameworkComponent,
    AboutComponent,
    DetailComponent,
    RegistrationFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'detail/:id',
        component: DetailComponent
      },
      {
        path: 'register',
        component: RegistrationFormComponent
      },
      
    ])
  
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
