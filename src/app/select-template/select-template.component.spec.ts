import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTemplateComponent } from './select-template.component';

describe('SelectTemplateComponent', () => {
  let component: SelectTemplateComponent;
  let fixture: ComponentFixture<SelectTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectTemplateComponent]
    });
    fixture = TestBed.createComponent(SelectTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
