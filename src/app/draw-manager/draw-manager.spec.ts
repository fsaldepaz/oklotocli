import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawManager } from './draw-manager';

describe('DrawManager', () => {
  let component: DrawManager;
  let fixture: ComponentFixture<DrawManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawManager],
    }).compileComponents();

    fixture = TestBed.createComponent(DrawManager);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
