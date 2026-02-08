class Person {
  constructor(name) {
    this.name = name;
  }

  getInfo() {
    return `Особа: ${this.name}`;
  }
}

class Course {
  constructor(title) {
    this.title = title;
    this.students = [];
  }

  addStudent(student) {
    if (student instanceof Student && !this.students.includes(student)) {
      this.students.push(student);
      student.courses.push(this);
    }
  }
}

class Teacher extends Person {
  constructor(name) {
    super(name);
    this.courses = [];
  }

  addCourse(course) {
    if (course instanceof Course && !this.courses.includes(course)) {
      this.courses.push(course);
    }
  }

  getInfo() {
    return `Викладач: ${this.name}, Кількість курсів: ${this.courses.length}`;
  }
}

class Student extends Person {
  constructor(name) {
    super(name);
    this.courses = [];
  }

  viewCourses() {
    return this.courses.map(course => course.title).join(", ") || "немає курсів";
  }

  getInfo() {
    return `Студент: ${this.name}, Записаний на курси: ${this.viewCourses()}`;
  }
}

const teacherMath = new Teacher("Професор Петренко");
const courseMath = new Course("Вища математика");
const courseJS = new Course("Програмування JS");

const studentAndrii = new Student("Андрій");
const studentOlena = new Student("Олена");

teacherMath.addCourse(courseMath);
teacherMath.addCourse(courseJS);

courseMath.addStudent(studentAndrii);
courseMath.addStudent(studentOlena);
courseJS.addStudent(studentAndrii);

console.log(teacherMath.getInfo());
console.log(`Викладає курси: ${teacherMath.courses.map(c => c.title).join(", ")}`);

console.log("---");

console.log(`Курс: ${courseMath.title}`);
console.log(`Студенти на курсі: ${courseMath.students.map(s => s.name).join(", ")}`);

console.log("---");

console.log(studentAndrii.getInfo());
console.log(studentOlena.getInfo());