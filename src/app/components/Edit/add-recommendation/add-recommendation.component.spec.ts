import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecommendationComponent } from './add-recommendation.component';

describe('AddRecommendationComponent', () => {
  let component: AddRecommendationComponent;
  let fixture: ComponentFixture<AddRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRecommendationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
