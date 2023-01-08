import { InsertPerfumeItemComponent } from './insert-perfume-item/insert-perfume-item.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { InsertItemComponent } from './insert-item/insert-item.component';
import { PerfumeItemComponent } from './perfume-item/perfume-item.component';
import { UpdateItemsComponent } from './update-items/update-items.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  {
    path:"", component:LoginLayoutComponent
  },
  
  { 
    path:"signup", component:SignUpComponent
  },
  {
    path:"admin", component:MainLayoutComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:"insertitem", component:InsertItemComponent
      },
      {
        path:"nodeitem", component:PerfumeItemComponent
      },
      {
        path:"insertperfumeitem", component:InsertPerfumeItemComponent
      },
      {
        path:"item", component:HomeComponent
      },
      {
        path:"home", component:HomeComponent
      },
      {
        path:"updateitems", component:UpdateItemsComponent
      },
    ]
  },
  {path:'**', component:LoginLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
