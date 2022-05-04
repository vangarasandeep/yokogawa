import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivewellsComponent } from './activewells.component';

describe('ActivewellsComponent', () => {
  let component: ActivewellsComponent;
  let fixture: ComponentFixture<ActivewellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivewellsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivewellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
