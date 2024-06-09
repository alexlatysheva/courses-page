import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../../../model/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent implements OnInit {
  public courses: ICourse[] = [];

  public ngOnInit(): void {
    this.courses = [{
      id: 1,
      title: 'Reprehenderit est veniam elit',
      creationDate: new Date('2024-01-01'),
      duration: new Date('2016-01-17 08:44:29+0100'),
      description: `Consectetur veniam non nulla in laboris minim ipsum. Dolor aliqua irure sint do irure magna tempor culpa quis.
          Deserunt amet occaecat velit sit.`,
    },
    {
      id: 2,
      title: 'Мagna Excepteur aute Deserunt',
      creationDate: new Date('2024-01-01'),
      duration: new Date('2024-01-01'),
      description: `Sunt culpa officia minim commodo eiusmod irure sunt nostrud. 
            Mollit aliquip id occaecat officia proident anim dolor officia qui voluptate consectetur laborum. 
            Duis incididunt culpa aliqua mollit do fugiat ea dolor mollit irure Lorem tempor.`,
    },
    {
      id: 3,
      title: 'Reprehenderit eiusmod nostrud amet',
      creationDate: new Date('2024-01-01'),
      duration: new Date('2024-01-01'),
      description: `Est consequat deserunt officia fugiat culpa in aliquip consectetur. 
            Est nostrud occaecat cillum elit officia officia ea magna et minim officia commodo sunt. 
            Deserunt duis minim magna nostrud enim enim commodo sit elit nostrud cillum aliquip est qui.`,
    },
    {
      id: 4,
      title: 'Sit voluptate eiusmod ea',
      creationDate: new Date('2024-01-01'),
      duration: new Date('2024-01-01'),
      description: `Commodo id sunt sunt adipisicing et aliquip voluptate laborum consectetur. 
            Occaecat nisi sint exercitation ullamco adipisicing irure est in consectetur aute voluptate. 
            Ea pariatur dolor anim ea reprehenderit ut non occaecat magna adipisicing exercitation nisi consequat.`,
    },
    {
      id: 5,
      title: 'Duis mollit reprehenderit ad',
      creationDate: new Date('2024-01-01'),
      duration: new Date('2024-01-01'),
      description: `Est minim ea aute sunt laborum minim eu excepteur. 
            Culpa sint exercitation mollit enim ad culpa aliquip laborum cillum. 
            Dolor officia culpa labore ex eiusmod ut est ea voluptate ea nostrud.`,
    }
  ];
  }

  public loadMore(): void {
    console.log('load more');
  }

  public editCourse(course: ICourse): void {
    console.log(`edit course: id ${course.id}, title ${course.title}`);
  }

  public deleteCourse(course: ICourse): void {
    console.log(`delete course: id ${course.id}`);
  }

}
