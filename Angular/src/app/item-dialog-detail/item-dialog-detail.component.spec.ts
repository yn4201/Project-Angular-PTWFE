import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDialogDetailComponent } from './item-dialog-detail.component';

describe('ItemDialogDetailComponent', () => {
  let component: ItemDialogDetailComponent;
  let fixture: ComponentFixture<ItemDialogDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDialogDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDialogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
