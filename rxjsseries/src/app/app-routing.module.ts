import { PromiseComponent } from './promise/promise.component';
import { OfFromComponent } from './of-from/of-from.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'of-from',
    component: OfFromComponent,
},
{
  path: 'promise',
  component: PromiseComponent,
},{
  path: '**',
  redirectTo: 'promise',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
