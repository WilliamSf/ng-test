import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UniqueIdService } from '../services/unique-id/unique-id.service';

import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> =  null;

  beforeEach(async () => {
    // test first
    // await TestBed.configureTestingModule({
    //   declarations: [LikeWidgetComponent],
    //   providers: [UniqueIdService]
    // }).compileComponents();

    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
  });

  it('Should create component',() => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('Should auto generate ID when id input property is missing', () => {
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should NOT generate ID when id input property is present', () => {
    const component = fixture.componentInstance;
    const someId = 'test';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });
});
