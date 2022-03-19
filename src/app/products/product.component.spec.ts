import { ProductListComponent } from "./product-list.component";
import { TestBed } from "@angular/core/testing";
describe('ProductListComponent', () => {
    beforeEach(async() => {
      await TestBed.configureTestingModule({
        declarations: [
          ProductListComponent          
        ],
      }).compileComponents();
    });
  
 
    it('truthy test', () => {
      const fixture = TestBed.createComponent(ProductListComponent);
      //const app = fixture.debugElement.componentInstance;
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });

  });
  