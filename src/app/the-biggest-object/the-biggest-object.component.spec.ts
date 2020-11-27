import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBiggestObjectComponent } from './the-biggest-object.component';

describe('TheBiggestObjectComponent', () => {
  let component: TheBiggestObjectComponent;
  let fixture: ComponentFixture<TheBiggestObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheBiggestObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBiggestObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
