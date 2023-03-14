import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { MastheadComponent } from './components/masthead/masthead.component';
// import { DashboardComponent } from './component/dashboard/dashboard.component';
// import { NavigationComponent } from './component/navigation/navigation.component';
// import { SupportComponent } from './component/support/support.component';

// @NgModule({
//   declarations: [
//     AppComponent
//     //AppComponent,
//     MastheadComponent,
//     DashboardComponent,
//     NavigationComponent,
//     SupportComponent
//   ],
//   imports: [
//     BrowserModule,
