import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { MastHeadModule } from 'src/app/widgets/mast-head/mast-head.module';
import { SidebarModule } from 'src/app/widgets/sidebar/sidebar.module';
import { SwitchModule } from 'src/app/widgets/switch/switch.module';

const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MastHeadModule,
    SidebarModule,
    SwitchModule,
    RouterModule.forChild(HOME_ROUTES)
  ],
  exports: [RouterModule]
})
export class HomeModule {}
