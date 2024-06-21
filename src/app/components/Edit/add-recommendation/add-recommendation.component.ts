import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-recommendation',
  standalone: true,
  imports: [],
  templateUrl: './add-recommendation.component.html',
  styleUrl: './add-recommendation.component.scss'
})
export class AddRecommendationComponent {
  @Input() selection! : number;
}
