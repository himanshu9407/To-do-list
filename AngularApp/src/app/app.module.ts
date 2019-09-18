import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { DisplayComponent } from './display/display.component';
import { RouterModule, Routes} from '@angular/router';


const routes : Routes = [
  {path:'', redirectTo:'employee', pathMatch:'full'},
  {path : '', component:EmployeeComponent},
  {path:'home', component:EmployeeComponent},
  {path:'display', component:DisplayComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
