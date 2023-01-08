import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPerfumeItemComponent } from './insert-perfume-item.component';

describe('InsertPerfumeItemComponent', () => {
  let component: InsertPerfumeItemComponent;
  let fixture: ComponentFixture<InsertPerfumeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertPerfumeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertPerfumeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
