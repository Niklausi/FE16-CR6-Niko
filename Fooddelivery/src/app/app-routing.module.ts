import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "aboutus", component: AboutusComponent},
  {path: "menu", component: MenuComponent},
  {path: "order", component: OrderComponent},
  {path: 'products/:productId', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
