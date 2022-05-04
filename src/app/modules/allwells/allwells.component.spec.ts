import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllwellsComponent } from './allwells.component';

describe('AllwellsComponent', () => {
  let component: AllwellsComponent;
  let fixture: ComponentFixture<AllwellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllwellsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllwellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
