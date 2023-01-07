class Course {
    courseName;
    courseTasks;
    alerts;
    constructor(inputCourseName) {
        this.courseName = inputCourseName;
        this.courseTasks = [];
        this.alerts = [];
    }
    createTask(inputCourseTasksName,inputCourseTasksTime) {
        this.courseTasks.push({taskName: inputCourseTasksName, taskTime: inputCourseTasksTime});
    }
    createAlert(inputalertName,inputAlertText) {
        this.alerts.push({alertName: inputalertName, alertText: inputAlertText});
    }
}
class Student {
    name;
    courses;
    tasks;
    alerts;
    constructor(inputStudentFirstName,inputStudentLastName) {
        this.name = {firstName: inputStudentFirstName, lastName: inputStudentLastName};
        this.courses = [];
        this.tasks = [];
        this.alerts = [];
    }
    addCourse(courseName) {
        this.courses.push(courseName);
    }
    addAlert(inputAlertName,inputAlertText) {
        this.alerts.push({alertName: inputAlertName,alertText: inputAlertText})
    }
}
let wordPress = new Course('wordPress');
wordPress.createTask('Task1','30 minutes');
let aviAviya = new Student('Avi','Aviya');
aviAviya.addCourse(wordPress);
wordPress.createAlert('Exam A','You have your first exam in 10 days!');
aviAviya.addAlert(wordPress.alerts);