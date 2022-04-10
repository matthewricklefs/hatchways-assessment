import React, { useState } from 'react';

import Tag from './Tag';
import Accordion from './Accordion';

import styled from 'styled-components';
import './SearchBar.css';
import './Tag.css';

// import SearchIcon from '@material-ui/icons/Search';
// import CloseIcon from '@material-ui/icons/Close';

const StyledStudentsGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};

  a {
    position: relative;
    z-index: 1;
  }
`;

const StyledStudent = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.boxShadow};
  }

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

    .student-links {
      justify-content: flex-start;
      margin-left: 0;
      margin-right: -10px;

      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .student-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .student-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .student-overline {
    margin: 10px 0;
    color: #ce93d8;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .student-title {
    color: var(--lightest-slate);
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    @media (max-width: 768px) {
      color: var(--white);

      a {
        position: static;

        &:before {
          content: '';
          display: block;
          align-items: center;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }

  .student-description {
    ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: 100%;

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    strong {
      color: var(--white);
      font-weight: normal;
    }
  }

  .student-grade-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 20px 5px 0;
      color: #ce93d8;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;

      li {
        margin: 0 10px 5px 0;
        color: var(--lightest-slate);
      }
    }
  }

  .student-image {
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }

    a {
      background-color: #ce93d8;
      border-radius: 100%;
      border 1px solid grey;

      &:hover,
      &:focus {
        background: transparent;
        outline: 0;

        &:before,
        .img {
          background: transparent;
          filter: none;

        }
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: var(--transition);
        mix-blend-mode: screen;
      }
    }

    .img {
      border-radius: 100%;
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);

      @media (max-width: 768px) {
        object-fit: contain;
        width: auto;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(50%);
      }
    }
  }
`;

function Profile({ students, onTagAdded, studentIndex }) {
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState('');

  const handleTagKeyPress = (e) => {
    if (e.key === 'Enter') {
      setTags((previousTags) => [...previousTags].push(tag));
      setTag('');
      onTagAdded(tag, studentIndex);
      // event.target.value = '';
    }
  };

  return (
    <StyledStudentsGrid>
      {students
        .filter(
          (student) =>
            student.firstName.toLowerCase().includes(students) ||
            student.lastName.toLowerCase().includes(students)
        )
        .map((student, index) => (
          <StyledStudent key={index}>
            <div className="student-content">
              <h3 className="numbered-heading">
                {student.firstName} {student.lastName}
              </h3>

              <div className="student-image">
                <img className="" src={student.pic} alt="Headshot" />
              </div>

              <p className="student-overline">
                <span className="student-overline">Email: </span>
                {student.email}
              </p>

              <h4>
                <span className="student-overline">City: </span>
                {student.city}
              </h4>

              <h5>
                <span className="student-overline">Company: </span>
                {student.company}
              </h5>

              <h6>
                <span className="student-overline">Skill: </span>
                {student.skill}
              </h6>

              <Accordion key={index} data={student.grades} />

              <Tag
                onChange={(e) => setTag(e.target.value)}
                onKeyPress={handleTagKeyPress}
                tags={tags}
                tag={tag}
              />
            </div>
          </StyledStudent>
        ))}
    </StyledStudentsGrid>
  );
}
export default Profile;
