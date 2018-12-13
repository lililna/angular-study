import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BannerComponent } from './module/banner/banner.component';
import { SelfRoutingModule } from './self-routing.module';

@NgModule({
  imports: [
    SharedModule,
    SelfRoutingModule
  ],
  declarations: [BannerComponent]
})
export class SelfCodeModule { }
