import { TestBed, async } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
// bypass elements declarations
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// bypass router
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HeaderComponent
            ],
            imports: [RouterTestingModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));

    it('should create the header', () => {
        const fixture = TestBed.createComponent(HeaderComponent);
        const header = fixture.debugElement.componentInstance;
        expect(header).toBeTruthy();
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(HeaderComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('#title').textContent).toContain('My App');
    });
});
