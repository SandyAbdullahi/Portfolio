import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToEmailComponent } from './call-to-email.component';

describe('CallToEmailComponent', () => {
  let component: CallToEmailComponent;
  let fixture: ComponentFixture<CallToEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
