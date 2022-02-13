import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BirthdaySecondsComponent } from './birthday-seconds/birthday-seconds.component';
import { DesperadoComponent } from './desperado/desperado.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: 'desperado', component: DesperadoComponent},
  {path: 'birthdayseconds', component: BirthdaySecondsComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
