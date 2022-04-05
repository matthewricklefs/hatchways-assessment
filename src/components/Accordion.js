import React, { useState, useRef } from 'react';
import Chevron from './Chevron';
import './Accordion.css';

function Accordion({ data, index }) {
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
              {data.map((grade, i) => (
                <li key={index}>
                  <span>Test {i}:</span> {grade}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
