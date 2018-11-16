import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { HttpModule } from '@angular/http';
import { loadSvgResources } from '../utils/svg.util';
import 'hammerjs';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpModule,
    SharedModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
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