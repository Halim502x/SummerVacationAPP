import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-place',
  standalone: true,
  imports: [],
  templateUrl: './add-place.component.html',
  styleUrl: './add-place.component.scss'
})
export class AddPlaceComponent {
  @Input() selection! : number;
}
