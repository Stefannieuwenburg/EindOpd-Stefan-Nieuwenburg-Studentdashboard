import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
import OverviewPage from "./pages/OverviewPage";
import StudentsPage from "./pages/StudentsPage";
import StudentPage from "./pages/StudentPage";
import StudentData from "./data/StudentData";

const filterOnWeek = (studentData, filter) => {
  return studentData.filter((item) => {
    return item.assignment.includes(filter);
  });
};

const filterStudents = (studentData) => {
  const students = [];
  studentData.forEach((item) => {
    if (!students.includes(item.name)) {
      students.push(item.name);
    }
  });
  return students;
};

function Container() {
  const studentData = filterOnWeek(StudentData, "W1");
  const students = filterStudents(StudentData);
  return (
    <Router>
      <nav className="navigation">
        <ul>
       
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/Students">Students</Link>
          </li>
          
        </ul>
      </nav>
      <main>
        <Switch>
          <Route
            path="/Students/Student/:name"
            render={(props) => (
              <StudentPage {...props} studentData={studentData} />
            )}
          />
          <Route path="/Students/">
            <StudentsPage students={students} />
          </Route>
          <Route path="/">
            <OverviewPage studentData={studentData} students={students} />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default Container;
