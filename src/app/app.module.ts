import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentDetailsFormComponent } from './student-details/student-details-form/student-details-form.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentDetailService } from './shared/student-detail.service';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentDetailsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [StudentDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
