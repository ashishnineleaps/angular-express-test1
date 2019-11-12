import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatDataComponent } from './concat-data.component';

describe('ConcatDataComponent', () => {
  let component: ConcatDataComponent;
  let fixture: ComponentFixture<ConcatDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcatDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
