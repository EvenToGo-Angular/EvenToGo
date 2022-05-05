import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyselectionComponent } from './myselection.component';

describe('MyselectionComponent', () => {
  let component: MyselectionComponent;
  let fixture: ComponentFixture<MyselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyselectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
