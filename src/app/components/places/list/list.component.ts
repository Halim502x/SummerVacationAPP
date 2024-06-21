import { Component, Signal, computed } from '@angular/core';
import { Place } from '../../../models/place';
import { toSignal } from '@angular/core/rxjs-interop';
import { PlacesService } from '../services/places.service';

import { CommonModule } from '@angular/common';
import { Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
title = "liste de places"

places : Signal<Place[]> = toSignal(this.ps.places$,{initialValue:[]})
hasPlaces : Signal<boolean> = computed ( ()=> this.places().length > 0 )
placesNumber : Signal<number> = computed ( () => this.places.length )

constructor (
  private ps : PlacesService,
  private router : Router
) {}

  deleteplace(id :number) {
    this.ps.deleteplace(id).subscribe({
      next: (data) => {
        console.log("place removed")
        this.ps.init();
        this.router.navigateByUrl("/places");
      }
      ,
      error: (err) => {
        console.log("error: ",err)
      }
    })
  }

}
