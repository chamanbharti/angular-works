import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpHeadComponent } from './http-head.component';

describe('HttpHeadComponent', () => {
  let component: HttpHeadComponent;
  let fixture: ComponentFixture<HttpHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
