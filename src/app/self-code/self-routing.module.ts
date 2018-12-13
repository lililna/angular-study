import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './module/banner/banner.component';

const routes: Routes = [
    { path: 'self', component: BannerComponent }
];

@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class SelfRoutingModule {}
