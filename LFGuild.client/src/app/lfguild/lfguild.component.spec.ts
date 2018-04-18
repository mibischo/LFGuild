import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfguildComponent } from './lfguild.component';

describe('LfguildComponent', () => {
  let component: LfguildComponent;
  let fixture: ComponentFixture<LfguildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfguildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfguildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
