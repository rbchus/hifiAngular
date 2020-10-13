import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienesContactenosComponent } from './quienes-contactenos.component';

describe('QuienesContactenosComponent', () => {
  let component: QuienesContactenosComponent;
  let fixture: ComponentFixture<QuienesContactenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuienesContactenosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuienesContactenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
