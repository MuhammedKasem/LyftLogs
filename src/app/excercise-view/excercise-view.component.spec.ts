import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcerciseViewComponent } from './excercise-view.component';

describe('ExcerciseViewComponent', () => {
  let component: ExcerciseViewComponent;
  let fixture: ComponentFixture<ExcerciseViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcerciseViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcerciseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
