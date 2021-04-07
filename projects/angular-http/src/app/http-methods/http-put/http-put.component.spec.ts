import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPutComponent } from './http-put.component';

describe('HttpPutComponent', () => {
  let component: HttpPutComponent;
  let fixture: ComponentFixture<HttpPutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpPutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
