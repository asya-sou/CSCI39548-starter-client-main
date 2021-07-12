Frontend Server for the final project for CSCI 39548 for CRUD application for Student-Campus management system
Starter/Skeleton code source: https://github.com/mtlynch3/starter-client (@mtlynch3)

To start:

npm start

Requirements:

**All Campuses and Students**
(React-Redux, React, and React Router)
- [X] Write a campuses sub-reducer to manage campuses in your Redux store
- [X] Write a students sub-reducer to manage students in your Redux store
- [X] Write a component to display a list of all campuses (just their names and images)
- [X] Write a component to display a list of all students (just their names)
- [X] Display the all-campuses component when the url matches `/campuses`
- [X] Display the all-students component when the url matches `/students`
- [X] Add links to the navbar that can be used to navigate to the all-campuses view and the all-students view

**Single Student and Single Campus**
(React and React Router)
- [X] Write a component to display a single campus with the following information:
  - [X] The campus's name, image, address and description
  - [X] A list of the names of all students in that campus (or a helpful message if it doesn't have any students)
- [X] Display the appropriate campus's info when the url matches `/campuses/:campusId`
- [X] Clicking on a campus from the all-campuses view should navigate to show that campus in the single-campus view

- [X] Write a component to display a single student with the following information:
  - [X] The student's full name, email, image, and gpa
  - [X] The name of their campus (or a helpful message if they don't have one)
- [X] Display the appropriate student when the url matches `/students/:studentId`
- [X] Clicking on a student from the all-students view should navigate to show that student in the single-student view

- [X] Clicking on the name of a student in the single-campus view should navigate to show that student in the single-student view
- [X] Clicking on the name of a campus in the single-student view should navigate to show that campus in the single-campus view

**Adding a Campus and Adding a Student **
(React and React Router)
- [X] Write a component to display a form for adding a new campus that contains inputs for _at least_ the name and address.
- [X] Display this component EITHER as part of the all-campuses view, or as its own view
- [X] Submitting the form with a valid name/address should:
  - [X] Make an AJAX request that causes the new campus to be persisted in the database
  - [X] Add the new campus to the list of campuses without needing to refresh the page

- [X] Write a component to display a form for adding a new student that contains inputs for _at least_ first name, last name and email
- [X] Display this component EITHER as part of the all-students view, or as its own view
- [X] Submitting the form with a valid first name/last name/email should:
  - [X] Make an AJAX request that causes the new student to be persisted in the database
  - [X] Add the new student to the list of students without needing to refresh the page

**Removing a Campus and Removing a Student
**
(React and Axios/Fetch)
- [X] In the all-campuses view, include an `X` button next to each campus
- [X] Clicking the `X` button should:
  - [X] Make an AJAX request that causes that campus to be removed from database
  - [X] Remove the campus from the list of campuses without needing to refresh the page

- [X] In the all-students view, include an `X` button next to each student
- [X] Clicking the `X` button should:
  - [X] Make an AJAX request that causes that student to be removed from database
  - [X] Remove the student from the list of students without needing to refresh the page

