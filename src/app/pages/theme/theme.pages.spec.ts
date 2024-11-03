import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemePage } from './theme.pages';

describe('ThemeExamplePages', () => {
  let component: ThemePages;
  let fixture: ComponentFixture<ThemePages>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemePages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});