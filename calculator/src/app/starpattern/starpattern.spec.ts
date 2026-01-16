import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Starpattern } from './starpattern';

describe('Starpattern', () => {
  let component: Starpattern;
  let fixture: ComponentFixture<Starpattern>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Starpattern]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Starpattern);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
