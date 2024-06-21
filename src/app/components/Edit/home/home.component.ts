import { Component, EventEmitter, Output } from '@angular/core';
import { AddPlaceComponent } from '../add-place/add-place.component';
import { AddRecommendationComponent } from '../add-recommendation/add-recommendation.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AddPlaceComponent,AddRecommendationComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title="choisir"

  editMode!: number

  onselect(id:number) {
    this.editMode=id;
  }

}
