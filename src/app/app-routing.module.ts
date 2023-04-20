import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiriShopRegComponent } from './Components/miri-shop-reg/miri-shop-reg.component';
import { UserDataTableComponent } from './Components/user-data-table/user-data-table.component';

const routes: Routes = [
  {
     path:"",
     component:MiriShopRegComponent
  },
  {
    path:"data",
    component:UserDataTableComponent
  }

  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
