import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootProgressbarComponent } from './root-progressbar.component';

describe('RootProgressbarComponent', () => {
  let component: RootProgressbarComponent;
  let fixture: ComponentFixture<RootProgressbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RootProgressbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RootProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
