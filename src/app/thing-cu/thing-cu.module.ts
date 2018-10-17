import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { ThingCuLandingComponent } from './thing-cu-landing/thing-cu-landing.component';
import { ThingCuFormComponent } from './thing-cu-form/thing-cu-form.component';
import { routes } from './thing-cu-routing.module'
import { ThingCuService } from './shared/thing-cu.service'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    TableModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.threeBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '6px',
      primaryColour: '#2A3F54',
      secondaryColour: '#2A3F54',
      tertiaryColour: '#2A3F54',
      fullScreenBackdrop: true
    })

  ],
  declarations: [ThingCuLandingComponent, ThingCuFormComponent],
  providers:[ThingCuService]
})
export class ThingCuModule { }
