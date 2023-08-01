import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeRescueComponent } from './resume-rescue.component';

describe('ResumeRescueComponent', () => {
  let component: ResumeRescueComponent;
  let fixture: ComponentFixture<ResumeRescueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeRescueComponent]
    });
    fixture = TestBed.createComponent(ResumeRescueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
