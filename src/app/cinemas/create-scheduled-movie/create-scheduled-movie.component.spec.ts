import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateScheduledMovieComponent } from './create-scheduled-movie.component';

describe('CreateScheduledMovieComponent', () => {
  let component: CreateScheduledMovieComponent;
  let fixture: ComponentFixture<CreateScheduledMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateScheduledMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateScheduledMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
