import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesconocidoPage } from './desconocido.page';

describe('DesconocidoPage', () => {
  let component: DesconocidoPage;
  let fixture: ComponentFixture<DesconocidoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DesconocidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
