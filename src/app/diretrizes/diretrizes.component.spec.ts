import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretrizesComponent } from './diretrizes.component';

describe('DiretrizesComponent', () => {
  let component: DiretrizesComponent;
  let fixture: ComponentFixture<DiretrizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretrizesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretrizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
