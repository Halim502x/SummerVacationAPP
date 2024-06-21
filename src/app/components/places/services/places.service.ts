import { Injectable } from '@angular/core';
import { Observable, mergeMap, first } from 'rxjs';
import { Place } from '../../../models/place';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  url = "link"
  constructor(
    private http:HttpClient
  ) { }

  places$! : Observable<Place[]>

  init () {
    this.getplaces();
  }
  getplaces() {
    this.places$ = this.http.get<Place[]>(this.url)
  }

  //getplace by id 
  getPlaceById(id : number) {
    return this.places$.pipe(
      mergeMap( (places) => (places) ), first( (place) => (place.id == id)  )
    )
  }

  /*oldgetplacebyid(id: number) {
    return this.http.get<Place>(`${this.url}${id}`)
  }*/

  deleteplace(id : number) : Observable<any>  {
    return this.http.delete(`${this.url}${id}`)
  }


}
