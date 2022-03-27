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
        <button className={`accordion ${active}`} onClick={toggleAccordion}>
          <p className="accordion__title">{data.title}</p>
          <Chevron className={`${rotate}`} width={10} fill={'#777'} />
        </button>

        <div
          ref={reference}
          style={{ maxHeight: `${height}` }}
          className="accordion__content"
        >
          <div className="accordion__text" key={index}>
            <a
              className="dataItem"
              href={data.link}
              target="_blank"
              rel="noreferrer"
            >
              <p>
                {data.author === 'Unknown' ? 'Unknown Author' : data.author}{' '}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
