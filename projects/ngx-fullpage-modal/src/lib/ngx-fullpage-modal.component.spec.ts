import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFullpageModalComponent } from './ngx-fullpage-modal.component';

describe('NgxFullpageModalComponent', () => {
  let component: NgxFullpageModalComponent;
  let fixture: ComponentFixture<NgxFullpageModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFullpageModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFullpageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
