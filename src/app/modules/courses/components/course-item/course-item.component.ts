import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from '../../../../model/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.scss'
})
export class CourseItemComponent {
  @Input() public course: ICourse = {} as ICourse;
  @Output() public edit: EventEmitter<ICourse> = new EventEmitter<ICourse>();
  @Output() public delete: EventEmitter<ICourse> = new EventEmitter<ICourse>();

  public editCourse(): void {
    this.edit.emit(this.course);
  }

  public deleteCourse(): void {
    this.delete.emit(this.course);
  }
}
