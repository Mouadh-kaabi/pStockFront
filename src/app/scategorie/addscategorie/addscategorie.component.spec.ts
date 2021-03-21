import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddscategorieComponent } from './addscategorie.component';

describe('AddscategorieComponent', () => {
  let component: AddscategorieComponent;
  let fixture: ComponentFixture<AddscategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddscategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddscategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
