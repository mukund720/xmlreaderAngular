import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlImportComponent } from './xml-import.component';

describe('XmlImportComponent', () => {
  let component: XmlImportComponent;
  let fixture: ComponentFixture<XmlImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmlImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmlImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
