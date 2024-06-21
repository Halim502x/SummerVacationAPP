import { Routes } from "@angular/router";
import { AddPlaceComponent } from "./add-place/add-place.component";
import { AddRecommendationComponent } from "./add-recommendation/add-recommendation.component";
import { HomeComponent } from "./home/home.component";


export const routes:Routes = [
    {path:'/', component:HomeComponent},
    {path: 'addplace' , component:AddPlaceComponent},
    {path: 'addrecommondation', component:AddRecommendationComponent}
]