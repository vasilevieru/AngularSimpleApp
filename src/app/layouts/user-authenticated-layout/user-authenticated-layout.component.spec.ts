import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthenticatedLayoutComponent } from './user-authenticated-layout.component';

describe('UserAuthenticatedLayoutComponent', () => {
  let component: UserAuthenticatedLayoutComponent;
  let fixture: ComponentFixture<UserAuthenticatedLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAuthenticatedLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAuthenticatedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
