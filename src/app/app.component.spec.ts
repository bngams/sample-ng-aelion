import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
// bypass elements declarations
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// bypass router
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ng-app');
  });
});
