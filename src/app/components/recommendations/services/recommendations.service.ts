import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recommendation } from '../../../models/recommendation';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {
  base="localhost"
  port="8080"
  url= this.base + ":" + this.port + "/"
  
  recommndations$! : Observable<Recommendation[]>

  constructor(
    private http : HttpClient
  ) { }

  getrecommendations() : Observable<Recommendation[]> {
    return this.http.get<Recommendation[]>(this.url)
  }

  deleterecommendation(id : number) : Observable<any> {
    return this.http.delete(`${this.url}${id}`)
  }

  init() {
    this.recommndations$ = this.getrecommendations();
  }

}
