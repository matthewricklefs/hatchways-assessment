import React, { useState } from 'react';

function TagSubmit({ addTag, index }) {
  const [tag, setTag] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTag(tag, index);
        setTag('');
      }}
    >
      <input
        placeholder="Add a tag"
        type="text"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />

      <input type="submit" />
    </form>
  );
}

export default TagSubmit;
