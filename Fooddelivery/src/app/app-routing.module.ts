import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [
  {path: "Home", component: HomeComponent},
  {path: "Aboutus", component: AboutusComponent},
  {path: "Menu", component: MenuComponent},
  {path: "Order", component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
