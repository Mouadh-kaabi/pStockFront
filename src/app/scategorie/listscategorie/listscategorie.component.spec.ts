import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListscategorieComponent } from './listscategorie.component';

describe('ListscategorieComponent', () => {
  let component: ListscategorieComponent;
  let fixture: ComponentFixture<ListscategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListscategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListscategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
