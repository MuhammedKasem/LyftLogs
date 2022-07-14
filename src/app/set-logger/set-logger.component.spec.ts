import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetLoggerComponent } from './set-logger.component';

describe('SetLoggerComponent', () => {
  let component: SetLoggerComponent;
  let fixture: ComponentFixture<SetLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetLoggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
