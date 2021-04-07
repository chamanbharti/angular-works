import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpJsonpComponent } from './http-jsonp.component';

describe('HttpJsonpComponent', () => {
  let component: HttpJsonpComponent;
  let fixture: ComponentFixture<HttpJsonpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpJsonpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpJsonpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
