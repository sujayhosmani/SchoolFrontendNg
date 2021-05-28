import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankpageMainComponent } from './blankpage-main.component';

describe('BlankpageMainComponent', () => {
  let component: BlankpageMainComponent;
  let fixture: ComponentFixture<BlankpageMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankpageMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankpageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
