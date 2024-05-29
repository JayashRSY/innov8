import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UiUxComponent } from './pages/ui-ux/ui-ux.component';
import { ConsultingComponent } from './pages/consulting/consulting.component';
import { DesignComponent } from './pages/design/design.component';
import { DevelopmentComponent } from './pages/development/development.component';
import { Web3Component } from './pages/web3/web3.component';
import { AiComponent } from './pages/ai/ai.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'ui-ux',
    component: UiUxComponent
  },
  {
    path: 'consulting',
    component: ConsultingComponent
  },
  {
    path: 'design',
    component: DesignComponent
  },
  {
    path: 'development',
    component: DevelopmentComponent
  },
  {
    path: 'web3',
    component: Web3Component
  },
  {
    path: 'ai',
    component: AiComponent
  },


  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
