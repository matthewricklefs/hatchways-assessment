import React, { useState, useRef } from 'react';
import Chevron from './Chevron';
import styled from 'styled-components';

const StyledAccordion = styled.div`
  .accordion__section {
    display: flex;
    flex-direction: column !important;
    align-items: flex-start;
    justify-content: space-around;
  }

  .accordion {
    background-color: transparent;
    color: #444;
    cursor: pointer;
    padding: 10px;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    transition: background-color 0.6s ease;
  }

  .accordion:hover,
  .active {
    background-color: transparent;
  }

  .accordion__title {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 14px;
  }

  .accordion__icon {
    margin-left: auto;
    transition: transform 0.6 ease;
  }

  .rotate {
    transform: rotate(90deg);
  }

  .accordion__content {
    background-color: transparent;
    overflow: hidden;
    transition: max-height 0.6 ease;
  }

  .accordion__text {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 14px;
    padding: 18px;
  }
`;

function Accordion({ grades }) {
  const [active, setActive] = useState('');
  const [height, setHeight] = useState('0px');
  const [rotate, setRotate] = useState('accordion__icon');

  const reference = useRef(null);

  const toggleAccordion = () => {
    setActive(active === '' ? 'active' : '');
    setHeight(
      active === 'active' ? '0px' : `${reference.current.scrollHeight}px`
    );
    setRotate(
      active === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    );
  };

  return (
    <StyledAccordion>
      <div className="accordion__section">
        <div>
          <button
            className={`accordion ${active} button`}
            onClick={toggleAccordion}
          >
            <Chevron className={`${rotate}`} width={40} fill={'#777'} />
          </button>

          <div
            ref={reference}
            style={{ maxHeight: `${height}` }}
            className="accordion__content"
          >
            <div className="student-overline">
              <ul className="student-grade-list">
                {grades.map((grade, i) => (
                  <li key={i}>
                    <span>Test {i}:</span> {grade}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </StyledAccordion>
  );
}

export default Accordion;
