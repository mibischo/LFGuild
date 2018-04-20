import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import components here
import { AppComponent } from './app.component';
import { LfguildComponent } from './lfguild/lfguild.component';
import { CharacterComponent } from './character/character.component'

const appRoutes: Routes = [
  { path: '', redirectTo: 'lfguild', pathMatch: 'full' },
  { path: 'lfguild', component: LfguildComponent },
  { path: 'character', component: CharacterComponent }
  //{ path: 'test', component: TestComponent }
    
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}