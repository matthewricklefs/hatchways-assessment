import styled from 'styled-components';

const StyledTag = styled.div`
  .tag {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid lightgrey;

    border-radius: 5px;
  }
`;

const TagsInput = ({ tag }) => {
  return (
    <StyledTag>
      <div className="tag">{tag}</div>
    </StyledTag>
  );
};
export default TagsInput;
