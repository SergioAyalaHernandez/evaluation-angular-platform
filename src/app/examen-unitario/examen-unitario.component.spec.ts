import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenUnitarioComponent } from './examen-unitario.component';

describe('ExamenUnitarioComponent', () => {
  let component: ExamenUnitarioComponent;
  let fixture: ComponentFixture<ExamenUnitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenUnitarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenUnitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
