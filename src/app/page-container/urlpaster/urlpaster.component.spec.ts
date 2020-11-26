import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlpasterComponent } from './urlpaster.component';

describe('UrlpasterComponent', () => {
  let component: UrlpasterComponent;
  let fixture: ComponentFixture<UrlpasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlpasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlpasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
