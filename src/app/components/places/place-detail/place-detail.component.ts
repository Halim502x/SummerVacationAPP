import { Component, OnInit } from '@angular/core';
import { Place } from '../../../models/place';
import { PlacesService } from '../services/places.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-place-detail',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './place-detail.component.html',
  styleUrl: './place-detail.component.scss'
})
export class PlaceDetailComponent implements OnInit {
  title = "detail de place"

  constructor (
    private ps : PlacesService, 
    private router : Router,
    private route : ActivatedRoute
  ) {}

  place! : Observable<Place>
  //getplace by id

  delelteplace(id :number) {
    this.ps.deleteplace(id).subscribe({
      next: (data) => {
        console.log("deleted",data);
        this.ps.init();
        this.router.navigateByUrl("/places");
      }
      ,
      error: (err) => {
        console.log("error : ",err)
      }
    })

  }
  
  ngOnInit(): void {
      let id = this.route.snapshot.params["id"];
      if (id) {
        this.place = this.ps.getPlaceById(id)
      }
  }
}
