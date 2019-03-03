import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticallevelComponent } from './criticallevel.component';

describe('CriticallevelComponent', () => {
  let component: CriticallevelComponent;
  let fixture: ComponentFixture<CriticallevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticallevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticallevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
