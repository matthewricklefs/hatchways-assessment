import React, { useState, useEffect } from 'react';

import SearchBar from './components/SearchBar';
import Profile from './components/Profile';

function App() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [search, setSearch] = useState('');

  const handleTagAdded = (tag, index) => {
    setStudents((prevStudents) => {
      const changedStudent = { ...prevStudents[index] };

      if (!('tags' in changedStudent)) {
        changedStudent.tags = [];
      }
      changedStudent.tags.push(tag);

      const mutatableStudents = [...prevStudents];
      mutatableStudents[index] = changedStudent;
      return mutatableStudents;
    });
  };

  const API = 'https://api.hatchways.io/assessment/students';

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((result) => {
        setStudents(result.students);
        console.log(result.students);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    // Array.filter() is perfect for this situation //
    const filteredStudentsByNameAndTag = students.filter((student) => {
      const firstName = student.firstName.toLowerCase();
      const lastName = student.lastName.toLowerCase();
      const fullName = firstName + lastName;

      if ('tags' in student) {
        // You can now do whatever filtering you need to do based on tags
        let comparedTag = student.tag === 'tags';
        return comparedTag;
      }

      let comparedTag;

      return fullName.includes(search.toLowerCase()) && comparedTag;
    });

    setFilteredStudents(filteredStudentsByNameAndTag);
  }, [search, students]);

  return (
    <div>
      <SearchBar
        placeholder="Search by name"
        search={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* {search.length === 0 && <Profile students={students} />} */}

      {search.length !== 0 && (
        <div>
          {filteredStudents.map((student, index) => (
            <Profile
              students={students[student]}
              onTagAdded={handleTagAdded}
              studentIndex={index}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
