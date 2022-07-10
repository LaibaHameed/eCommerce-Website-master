import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ViewCartComponent } from './view-cart/view-cart.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'collections', component: CollectionsComponent},
  {path: 'view-cart', component:ViewCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
