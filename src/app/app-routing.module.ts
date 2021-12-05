import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesperadoComponent } from './desperado/desperado.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: 'desperado', component: DesperadoComponent},
  //{path: 'seconds', component: SecondsSinceBirthComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
