import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTemplateComponent } from './choose-template.component';

describe('ChooseTemplateComponent', () => {
  let component: ChooseTemplateComponent;
  let fixture: ComponentFixture<ChooseTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseTemplateComponent]
    });
    fixture = TestBed.createComponent(ChooseTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
