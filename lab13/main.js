const CourseManagerPrototype = {
  addStudent(student) {
    if (!this.students.includes(student)) {
      this.students.push(student);
      student.courses.push(this);
    }
  },
  addCourse(course) {
    if (!this.courses.includes(course)) {
      this.courses.push(course);
      if (this.name && !course.teacher) {
        course.teacher = this;
      }
    }
  },
  viewCourses() {
    return this.courses.map(course => course.title).join(', ');
  }
};

function Course(title) {
  this.title = title;
  this.students = [];
}
Course.prototype = Object.create(CourseManagerPrototype);

function Teacher(name) {
  this.name = name;
  this.courses = [];
}
Teacher.prototype = Object.create(CourseManagerPrototype);

function Student(name) {
  this.name = name;
  this.courses = [];
}
Student.prototype = Object.create(CourseManagerPrototype);

const jsCourse = new Course("JavaScript Fullstack");
const pythonCourse = new Course("Python Data Science");

const teacherPanchenko = new Teacher("Олександр Панченко");

const studentIvanov = new Student("Іван Іванов");
const studentPetrova = new Student("Марія Петрова");

teacherPanchenko.addCourse(jsCourse);
teacherPanchenko.addCourse(pythonCourse);

jsCourse.addStudent(studentIvanov);
jsCourse.addStudent(studentPetrova);
pythonCourse.addStudent(studentIvanov);

console.log(`Викладач: ${teacherPanchenko.name}`);
console.log(`Курси викладача: ${teacherPanchenko.viewCourses()}`);

console.log(`---`);
console.log(`Курс: ${jsCourse.title}`);
console.log(`Студенти: ${jsCourse.students.map(s => s.name).join(', ')}`);

console.log(`---`);
console.log(`Студент: ${studentIvanov.name}`);
console.log(`Список курсів студента: ${studentIvanov.viewCourses()}`);

console.log(`Студент: ${studentPetrova.name}`);
console.log(`Список курсів студента: ${studentPetrova.viewCourses()}`);