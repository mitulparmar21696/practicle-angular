import { Routes, RouterModule } from '@angular/router';
import { ThingCuLandingComponent } from './thing-cu-landing/thing-cu-landing.component';
import { ThingCuFormComponent } from './thing-cu-form/thing-cu-form.component';
export const routes: Routes = [
  {
    path: '',
    component: ThingCuLandingComponent,
    children: [
      {
        path: 'form',
        component: ThingCuFormComponent
      },
      {
        path: 'form/:id',
        component: ThingCuFormComponent
      },
      // {
      //   path: '**',
      //   component: RoomListingComponent
      // },
    ]
  }
];