import './Tag.css';

const TagsInput = ({ tag, tags, onChange, handleTagKeyPress }) => {
  return (
    <>
      <div className="tag-container">
        {tags.length > 0 && (
          <div className="tag">
            {tags.map((tag) => (
              <span>{tag}</span>
            ))}
          </div>
        )}
      </div>

      <input
        type="text"
        value={tag}
        placeholder="Add a tag"
        key="tag-input"
        onKeyPress={handleTagKeyPress}
        onChange={onChange}
      />
    </>
  );
};
export default TagsInput;
