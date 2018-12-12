import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { DataRowOutlet } from '@angular/cdk/table';

describe('HeaderComponent', () => {

    let httpSpy;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [ProductService]
        }).compileComponents();
        httpSpy = jasmine.createSpyObj('Http', ['get']);
    }));

    it('should inject service', inject([ProductService], (service: ProductService) => {
        expect(service).toBeTruthy();
    }));

    it('should fetch products', inject([ProductService], (service: ProductService) => {
        const mockProducts = [{ id: 1, name: 'Test', price: 10 }];
        // intercept http.get
        httpSpy.get.and.returnValue(mockProducts);
        service.fetchProducts().subscribe(data => {
            expect(mockProducts[0]).toEqual(data[0]);
        });
    }));
});
