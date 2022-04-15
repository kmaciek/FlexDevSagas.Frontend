import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookScheduledMovieComponent } from './book-scheduled-movie.component';

describe('BookScheduledMovieComponent', () => {
  let component: BookScheduledMovieComponent;
  let fixture: ComponentFixture<BookScheduledMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookScheduledMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookScheduledMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
