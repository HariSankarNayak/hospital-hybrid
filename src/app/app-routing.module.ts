import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),

  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'forgot',
    loadChildren: () =>
      import('./pages/forgot/forgot.module').then((m) => m.ForgotPageModule),
  },
  {
    path: 'result',
    loadChildren: () =>
      import('./pages/result/result.module').then((m) => m.ResultPageModule),
  },
  {
    path: 'clinic/:cid',
    loadChildren: () =>
      import('./pages/clinic/clinic.module').then((m) => m.ClinicPageModule),
  },
  {
    path: 'doctor/:did',
    loadChildren: () =>
      import('./pages/doctor/doctor.module').then((m) => m.DoctorPageModule),
  },
  {
    path: 'clinic/:cid/doctor/:did',
    loadChildren: () =>
      import('./pages/doctor/doctor.module').then((m) => m.DoctorPageModule),
  },
  {
    path: 'message',
    loadChildren: () =>
      import('./pages/message/message.module').then((m) => m.MessagePageModule),
  },
  {
    path: 'profile-edit',
    loadChildren: () =>
      import('./pages/profile-edit/profile-edit.module').then(
        (m) => m.ProfileEditPageModule
      ),
  },
  {
    path: 'profile-address',
    loadChildren: () =>
      import('./pages/profile-address/profile-address.module').then(
        (m) => m.ProfileAddressPageModule
      ),
  },
  {
    path: 'profile-password',
    loadChildren: () =>
      import('./pages/profile-password/profile-password.module').then(
        (m) => m.ProfilePasswordPageModule
      ),
  },
  {
    path: 'appointment-view/:aid',
    loadChildren: () =>
      import('./pages/appointment-view/appointment-view.module').then(
        (m) => m.AppointmentViewPageModule
      ),
  },
  {
    path: 'appointment-detail',
    loadChildren: () =>
      import('./pages/appointment-detail/appointment-detail.module').then(
        (m) => m.AppointmentDetailPageModule
      ),
  },
  {
    path: 'review',
    loadChildren: () =>
      import('./pages/review/review.module').then((m) => m.ReviewPageModule),
  },
  {
    path: 'review-details',
    loadChildren: () =>
      import('./pages/review-details/review-details.module').then(
        (m) => m.ReviewDetailsPageModule
      ),
  },
  {
    path: 'medical-list',
    loadChildren: () =>
      import('./pages/medical-list/medical-list.module').then(
        (m) => m.MedicalListPageModule
      ),
  },
  {
    path: 'search-modal/:searchid',
    loadChildren: () =>
      import('./pages/search-modal/search-modal.module').then(
        (m) => m.SearchModalPageModule
      ),
  },
  {
    path: 'search-clinic',
    loadChildren: () =>
      import('./pages/search-clinic/search-clinic.module').then(
        (m) => m.SearchClinicPageModule
      ),
  },
  {
    path: 'search-doctor',
    loadChildren: () =>
      import('./pages/search-doctor/search-doctor.module').then(
        (m) => m.SearchDoctorPageModule
      ),
  },
  {
    path: 'filter',
    loadChildren: () =>
      import('./pages/filter/filter.module').then((m) => m.FilterPageModule),
  },
  {
    path: 'filter-result/:lowerprice/:higherprice/:gender',
    loadChildren: () =>
      import('./pages/filter-result/filter-result.module').then(
        (m) => m.FilterResultPageModule
      ),
  },
  // { path: 'appointment',  loadChildren: () => import('./pages/appointment/appointment.module').then((m) => m.AppointmentPageModule ) , },
  // { path: 'search',  loadChildren: () => import('./pages/search/search.module').then((m) => m.SearchPageModule ) , },
  // { path: 'home',  loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule ) , },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
