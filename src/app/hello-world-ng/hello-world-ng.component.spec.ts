import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldNgComponent } from './hello-world-ng.component';

describe('HelloWorldNgComponent', () => {
  let component: HelloWorldNgComponent;
  let fixture: ComponentFixture<HelloWorldNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloWorldNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
