Frontend Server for the final project for CSCI 39548 for CRUD application for Student-Campus management system
Starter/Skeleton code source: https://github.com/mtlynch3/starter-client (@mtlynch3)

To start:

npm start

Requirements:

**All Campuses and Students**
(React-Redux, React, and React Router)
- [x ] Write a campuses sub-reducer to manage campuses in your Redux store
- [ x] Write a students sub-reducer to manage students in your Redux store
- [ x] Write a component to display a list of all campuses (just their names and images)
- [ x] Write a component to display a list of all students (just their names)
- [ x] Display the all-campuses component when the url matches `/campuses`
- [ x] Display the all-students component when the url matches `/students`
- [ x] Add links to the navbar that can be used to navigate to the all-campuses view and the all-students view

**Single Student and Single Campus**
(React and React Router)
- [ x] Write a component to display a single campus with the following information:
  - [x ] The campus's name, image, address and description
  - [x ] A list of the names of all students in that campus (or a helpful message if it doesn't have any students)
- [ x] Display the appropriate campus's info when the url matches `/campuses/:campusId`
- [ x] Clicking on a campus from the all-campuses view should navigate to show that campus in the single-campus view

- [ x] Write a component to display a single student with the following information:
  - [x ] The student's full name, email, image, and gpa
  - [ x] The name of their campus (or a helpful message if they don't have one)
- [ x] Display the appropriate student when the url matches `/students/:studentId`
- [ x] Clicking on a student from the all-students view should navigate to show that student in the single-student view

- [ x] Clicking on the name of a student in the single-campus view should navigate to show that student in the single-student view
- [ x] Clicking on the name of a campus in the single-student view should navigate to show that campus in the single-campus view

**Adding a Campus and Adding a Student **
(React and React Router)
- [x ] Write a component to display a form for adding a new campus that contains inputs for _at least_ the name and address.
- [x ] Display this component EITHER as part of the all-campuses view, or as its own view
- [ x] Submitting the form with a valid name/address should:
  - [ x] Make an AJAX request that causes the new campus to be persisted in the database
  - [x ] Add the new campus to the list of campuses without needing to refresh the page

- [x ] Write a component to display a form for adding a new student that contains inputs for _at least_ first name, last name and email
- [x ] Display this component EITHER as part of the all-students view, or as its own view
- [x ] Submitting the form with a valid first name/last name/email should:
  - [x ] Make an AJAX request that causes the new student to be persisted in the database
  - [ x] Add the new student to the list of students without needing to refresh the page

**Removing a Campus and Removing a Student
**
(React and Axios/Fetch)
- [ x] In the all-campuses view, include an `X` button next to each campus
- [x ] Clicking the `X` button should:
  - [ x] Make an AJAX request that causes that campus to be removed from database
  - [ x] Remove the campus from the list of campuses without needing to refresh the page

- [x ] In the all-students view, include an `X` button next to each student
- [x ] Clicking the `X` button should:
  - [ x] Make an AJAX request that causes that student to be removed from database
  - [x ] Remove the student from the list of students without needing to refresh the page

