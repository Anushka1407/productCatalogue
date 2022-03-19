import { WelcomeComponent } from "./welcome.component";
import { TestBed } from "@angular/core/testing";
describe('WelcomeComponent', () => {
    beforeEach(async() => {
      await TestBed.configureTestingModule({
        declarations: [
          WelcomeComponent          
        ],
      }).compileComponents();
    });
  
    it('should have as text Welcome', () => {
      const fixture = TestBed.createComponent(WelcomeComponent);
      //const app = fixture.debugElement.componentInstance;
      const app = fixture.componentInstance;
      expect(app.pageTitle).toEqual('Welcome');
      //expect(app).toBeTruthy();
    });
  });
  