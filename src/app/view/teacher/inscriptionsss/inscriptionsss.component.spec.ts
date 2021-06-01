import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionsssComponent } from './inscriptionsss.component';

describe('InscriptionsssComponent', () => {
  let component: InscriptionsssComponent;
  let fixture: ComponentFixture<InscriptionsssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionsssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionsssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
