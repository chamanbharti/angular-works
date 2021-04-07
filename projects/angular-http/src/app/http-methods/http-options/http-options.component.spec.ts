import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpOptionsComponent } from './http-options.component';

describe('HttpOptionsComponent', () => {
  let component: HttpOptionsComponent;
  let fixture: ComponentFixture<HttpOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
