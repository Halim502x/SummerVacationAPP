import { Component ,Signal,computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import {toSignal} from '@angular/core/rxjs-interop';
import { Router,RouterModule } from '@angular/router';
import { RecommendationsService } from '../services/recommendations.service';
import { Recommendation } from '../../../models/recommendation';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export default class ListComponent{
  titre ="liste de recommendations"


  recommendations : Signal<Recommendation[]> = toSignal(this.rs.getrecommendations(),{initialValue:[]})
  hasrecommendations : Signal<boolean> = computed ( () => this.recommendations().length > 0 )
  recommendationsNumber : Signal<number> = computed ( () => this.recommendations().length )

  
  
  constructor (
    private rs : RecommendationsService,
    private router : Router
  ) {}

  deleterecommendation(id : number) {
    this.rs.deleterecommendation(id).subscribe({
      next: (data) => {
        console.log("recommendation deleted.");
        this.rs.init();
        this.router.navigateByUrl("/recommendations");
      }
      ,
      error: (err) => {
        console.log("errur:",err);
      }
    })
  }

  
}
