import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs', // ! Can put at the app-routing.module.ts
    component: TabsPage,
    // ! Edited
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },

      {
        path: 'appointment',
        loadChildren: () =>
        import('../appointment/appointment.module').then((m) => m.AppointmentPageModule),
      },
      {
        path: 'search',
        loadChildren: () =>
        import('../search/search.module').then((m) => m.SearchPageModule),
      },
      {
        path: 'message',
        loadChildren: () =>
        import('../message/message.module').then((m) => m.MessagePageModule),

      },
      {
        path: 'profile',
        loadChildren: () =>
        import('../profile/profile.module').then((m) => m.ProfilePageModule),
      },
    ],
    // ! End
  },
  // ! Edited
  // {
  //   path: '',
  //   redirectTo: '/tabs/home',
  //   pathMatch: 'full'
  // },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TabsPage],
})
export class TabsPageModule {}
