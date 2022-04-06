import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';

import './Tags.css';

const TagsInput = (props) => {
  const [tags, setTags] = useState([]);

  const addTags = (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      setTags([...tags, event.target.value]);
      props.selectedTags([...tags, event.target.value, props.studentId]);
      event.target.value = '';
    }
  };

  const removeTag = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };

  console.log(props);

  return (
    <div className="tags-input">
      <div className="tag-container">
        {tags.map((tag, index) => (
          <div className="tag" key={index}>
            {tag}
            <span>
              <CloseIcon onClick={() => removeTag(tag)} />
            </span>
          </div>
        ))}
      </div>

      <br />

      <input
        id="tag-filter"
        type="text"
        onKeyUp={(event) => addTags(event)}
        placeholder="Add a tag"
      />
    </div>
  );
};
export default TagsInput;
