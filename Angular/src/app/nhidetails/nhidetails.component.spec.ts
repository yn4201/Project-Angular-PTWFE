import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhidetailsComponent } from './nhidetails.component';

describe('NhidetailsComponent', () => {
  let component: NhidetailsComponent;
  let fixture: ComponentFixture<NhidetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhidetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NhidetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
