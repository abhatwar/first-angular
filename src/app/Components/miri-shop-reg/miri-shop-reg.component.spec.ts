import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiriShopRegComponent } from './miri-shop-reg.component';

describe('MiriShopRegComponent', () => {
  let component: MiriShopRegComponent;
  let fixture: ComponentFixture<MiriShopRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiriShopRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiriShopRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
