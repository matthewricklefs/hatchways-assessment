import React, { useState } from 'react';

const TagsInput = (props) => {
  const [tags, setTags] = useState([]);

  const addTags = (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      setTags([...tags, event.target.value]);
      props.selectedTags([...tags, event.target.value, props.studentId]);
      event.target.value = '';
    }
  };

  console.log(props);

  return (
    <div className="tags-input">
      <div className="tag-container">
        {tags.map((tag, index) => (
          <span className="tag" key={index}>
            {tag}
          </span>
        ))}
      </div>
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
