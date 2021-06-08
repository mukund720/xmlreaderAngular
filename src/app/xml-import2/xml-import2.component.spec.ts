import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlImport2Component } from './xml-import2.component';

describe('XmlImport2Component', () => {
  let component: XmlImport2Component;
  let fixture: ComponentFixture<XmlImport2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmlImport2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmlImport2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
