import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeElementComponent } from './serve-element.component';

describe('ServeElementComponent', () => {
  let component: ServeElementComponent;
  let fixture: ComponentFixture<ServeElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServeElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
