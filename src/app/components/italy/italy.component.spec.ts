import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalyComponent } from './italy.component';

describe('ItalyComponent', () => {
  let component: ItalyComponent;
  let fixture: ComponentFixture<ItalyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItalyComponent]
    });
    fixture = TestBed.createComponent(ItalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
