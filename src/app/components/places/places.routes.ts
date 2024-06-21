import { Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { PlaceDetailComponent } from "./place-detail/place-detail.component";


export const routes:Routes = [
    {path: '/list', component:ListComponent},
    {path: '/:id', component:PlaceDetailComponent}
]