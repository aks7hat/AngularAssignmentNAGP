import { TestBed } from '@angular/core/testing';
import { Product } from 'src/app/model/product.model';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

import { ProductServiceService } from './product-service.service';

describe('ProductServiceService', () => {
  let service: ProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule, TranslateModule.forRoot(), HttpClientModule],
      declarations: [ProductServiceService],
    });
    service = TestBed.inject(ProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return product array when called getProducts', () => {
    expect(service.getProducts).toBe([]);
  });
});
