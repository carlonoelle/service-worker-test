import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WitzeComponent } from './witze.component';

describe('WitzeComponent', () => {
  let component: WitzeComponent;
  let fixture: ComponentFixture<WitzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WitzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
