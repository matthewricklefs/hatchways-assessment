import React, { useState, useEffect } from 'react';

import SearchBar from './components/SearchBar';
import Profile from './components/Profile';

function App() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);

  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState('');

  const [search, setSearch] = useState('');

  const handleTagChange = (e) => setTag(e.target.value);

  const handleTagKeyPress = (e) => {
    if (e.key === 'Enter') {
      setTags((previousTags) => previousTags.push(tag));
      setTag('');
      // event.target.value = '';
    }
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
    const filteredStudentsByNameAndTag = students.filter((student) => {
      const firstName = student.firstName.toLowerCase();
      const lastName = student.lastName.toLowerCase();
      const fullName = firstName + lastName;

      return fullName.includes(search.toLowerCase()) && student.tag === tag;
    });

    setFilteredStudents(filteredStudentsByNameAndTag);
  }, [search]);

  return (
    <div>
      <SearchBar
        placeholder="Search by name"
        search={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search.length === 0 && (
        <Profile
          students={students}
          filteredStudents={filteredStudents}
          onChange={handleTagChange}
          onKeyPress={handleTagKeyPress}
          tag={tag}
          tags={tags}
        />
      )}

      {search.length !== 0 && (
        <div>
          {filteredStudents.map((student) => (
            <Profile
              students={student}
              filteredStudents={filteredStudents}
              onChange={handleTagChange}
              onKeyPress={handleTagKeyPress}
              tag={tag}
              tags={tags}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
