import { Link } from "react-router-dom";

const StudentsPage = (props) => {
  const studentLinks = props.students.map((item) => {
    const studentUrl = "/Students/Student/" + item;

    return (
      <li key={item}>
        <Link to={studentUrl}>{item}</Link>
      </li>
    );
  });

  

  return (
    <div className="StudentsPage">
      <h1>Students</h1>
      <div>
        <ul className="StudentsPageList">{studentLinks}</ul>
      </div>
    </div>
  );
};

export default StudentsPage;
