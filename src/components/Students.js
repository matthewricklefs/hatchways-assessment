import React, { useState, useEffect } from 'react';

function Students() {
  const [students, getStudents] = useState([]);
  const API = 'https://api.hatchways.io/assessment/students';

  const fetchStudents = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        getStudents(res.students);
      });
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
      <h2>React Fetch Data with REST API Example</h2>

      <ul>
        {students.map((student, i) => {
          return <li key={i}>{student.city}</li>;
        })}
      </ul>
    </>
  );
}

export default Students;
