import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { LoginComponent } from './login/login.component';
import { LoginoutComponent } from './loginout/loginout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpInterceptorService } from './http-interceptor.service';
import { ListuserComponent } from './user/listuser/listuser.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserService } from './shared/user.service';
import { StudentComponent } from './student/student/student.component';
import { ProductComponent } from './product/product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { AdminComponent } from './bike/admin/admin.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './bike/home/home.component';
import { ViewRegistrationComponent } from './bike/view-registration/view-registration.component';
import { CallbackComponent } from './bike/callback/callback.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    LoginComponent,
    LoginoutComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    ListuserComponent,
    UserFormComponent,
    StudentComponent,
    ProductComponent,
    ProductListComponent,
    AdminComponent,
    HomeComponent,
    ViewRegistrationComponent,
    CallbackComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    //material module
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  providers: [
    UserService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpInterceptorService,
    //   //useClass: EmployeeService,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
