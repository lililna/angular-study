import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { HttpModule } from '@angular/http';
import { loadSvgResources } from '../utils/svg.util';
import 'hammerjs';
import 'rxjs/add/operator/take';

@NgModule({
  imports: [
    HttpModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide:'BASE_CONFIG', useValue: 'http://localhost:3000'}
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() patent: CoreModule,
              mi: MdIconRegistry, 
              ds: DomSanitizer
  ) {
    if (patent) {
      throw new Error('模块已经存在，不能再次加载！');
    }
    loadSvgResources(mi, ds);
  }
 }