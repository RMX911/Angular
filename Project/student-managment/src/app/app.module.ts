import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchbarComponent } from './components/dashboard/searchbar/searchbar.component';
import { StudentsComponent } from './components/dashboard/students/students.component';

import { StudentsService } from '../app/services/students.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    SearchbarComponent,
    StudentsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [StudentsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
