import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from '../add-form/add-form.component';
import { CardComponent } from '../card/card.component';
import { CardsLayoutComponent } from '../cards-layout/cards-layout.component';

const routes: Routes = [
  {
    path:"",
    component: CardsLayoutComponent,
    children :[
      {
        path:"", component: CardComponent
      },
      {
        path:"item",component: AddFormComponent
      },
      {
        path:"item/:id",component:AddFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsModuleRoutingModule { }
