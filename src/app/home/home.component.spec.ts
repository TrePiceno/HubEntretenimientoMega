import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.movie = { 
      id: 1, 
      title: 'Inception', 
      genre: 'Action', 
      description: 'A mind-bending thriller', 
      favorite: false, 
      poster: 'https://image.tmdb.org/t/p/original/mJfTycNg8PxjvxzpnKnzAAG7RIP.jpg',
      trailerUrl: 'https://youtu.be/YoHD9XEInc0',
      banner: 'https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg'
    }
    fixture.detectChanges();
  });
});
