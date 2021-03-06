import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderProfileComponent } from './profile.component';

describe('ServiceProviderProfileComponent', () => {
  let component: ServiceProviderProfileComponent;
  let fixture: ComponentFixture<ServiceProviderProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceProviderProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProviderProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
