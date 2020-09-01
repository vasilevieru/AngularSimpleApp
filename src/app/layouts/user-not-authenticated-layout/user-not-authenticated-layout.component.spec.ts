import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNotAuthenticatedLayoutComponent } from './user-not-authenticated-layout.component';

describe('UserNotAuthenticatedLayoutComponent', () => {
  let component: UserNotAuthenticatedLayoutComponent;
  let fixture: ComponentFixture<UserNotAuthenticatedLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNotAuthenticatedLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNotAuthenticatedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
