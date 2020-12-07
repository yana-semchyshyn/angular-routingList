import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskchildComponent } from './taskchild.component';

describe('TaskchildComponent', () => {
  let component: TaskchildComponent;
  let fixture: ComponentFixture<TaskchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
