import { TaskModule } from './task/task.module';
import { ProjectModule } from './project/project.module';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SelfCodeModule } from './self-code/self-code.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    LoginModule,
    ProjectModule,
    TaskModule,
    SelfCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
