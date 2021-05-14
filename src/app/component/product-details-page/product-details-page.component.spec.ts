import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from 'src/app/model/product.model';
import { ProductDetailsPageComponent } from './product-details-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('ProductDetailsPageComponent', () => {
  let component: ProductDetailsPageComponent;
  let fixture: ComponentFixture<ProductDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule, TranslateModule.forRoot()],
      declarations: [ProductDetailsPageComponent],
      providers: [TranslateService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit and return product', () => {
    const fixture1 = TestBed.createComponent(ProductDetailsPageComponent);
    const component1 = fixture1.debugElement.componentInstance;
    // component.product.name;
    expect(component1.product.name).toEqual(String);
  });
});
