import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDialogUpdateComponent } from './item-dialog-update.component';

describe('ItemDialogUpdateComponent', () => {
  let component: ItemDialogUpdateComponent;
  let fixture: ComponentFixture<ItemDialogUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDialogUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDialogUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
