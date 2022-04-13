/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Students from './components/Students';

//todo: refactor accordion toggle..
//todo: clean up global styles / remove css modules
//todo: implement remove tag func in App
//todo: save updatedStudentObject in localeStorage?...

function App() {
  const [studentData, setStudentData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [nameFilter, setNameFilter] = useState([]);
  const [tagFilter, setTagFilter] = useState([]);

  const addTag = (input, index) => {
    const studentTag = [...studentData];
    studentTag[index].tags.push(input);
    setStudentData(studentTag);
  };

  const filteredStudent = (input) => {
    let newStudentFilter = [];

    studentData.map((student) => {
      const fullName =
        `${student.firstName} ${student.lastName}`.toLocaleLowerCase();

      if (fullName.includes(input)) {
        newStudentFilter.push(student);
      }
    });

    let updatedStudentQuery = [];

    tagFilter.map((student) => {
      const fullName =
        `${student.firstName} ${student.lastName}`.toLocaleLowerCase();

      if (fullName.includes(input)) {
        updatedStudentQuery.push(student);
      }
    });

    setFilteredData(updatedStudentQuery);
    setNameFilter(newStudentFilter);
  };

  const filteredTag = (input) => {
    if (input) {
      let newTagFilter = [];
      let updatedTagQuery = [];

      studentData.map((student) => {
        let tagged = false;

        student.tags.map((tag) => {
          if (tag.includes(input)) {
            tagged = true;
          }
        });

        if (tagged) {
          newTagFilter.push(student);
        }
      });

      filteredData.map((student) => {
        let tagged = false;

        student.tags.map((tag) => {
          if (tag.includes(input)) {
            tagged = true;
          }
        });

        if (tagged) {
          updatedTagQuery.push(student);
        }
      });

      setFilteredData(updatedTagQuery);
      setTagFilter(newTagFilter);
    } else {
      setFilteredData(nameFilter);
      setTagFilter(studentData);
    }
  };

  const API = 'https://api.hatchways.io/assessment/students';

  async function fetchStudents(url) {
    const response = await fetch(url);
    const json = await response.json();

    let newStudentData = [];

    json.students.map((student) => {
      let addTags = student;
      addTags.tags = [];
      newStudentData.push(addTags);
    });

    setStudentData(newStudentData);
    setFilteredData(newStudentData);
    setNameFilter(newStudentData);
    setTagFilter(newStudentData);
  }

  useEffect(() => {
    fetchStudents(API);
  }, []);

  return (
    <div className="App">
      <div className="contentContainer">
        <SearchBar
          placeholder="Search by name"
          onChange={(e) => setFilteredData(e.target.value)}
          filteringFunc={filteredStudent}
          type={`name`}
        />

        <SearchBar
          placeholder="Search by tag"
          onChange={(e) => setFilteredData(e.target.value)}
          filteringFunc={filteredTag}
          type={`tag`}
        />

        {filteredData.map((student, index) => {
          return (
            <Students
              key={index.toString()}
              index={index}
              img={student.pic}
              firstName={student.firstName}
              lastName={student.lastName}
              email={student.email}
              company={student.company}
              skill={student.skill}
              grades={student.grades}
              tags={student.tags}
              addTag={addTag}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
