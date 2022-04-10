import Accordion from './Accordion';
import SearchBar from './TagBar';
import Tag from './Tag';
import Profile from './Profile';

function Students() {
  const removeTag = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };

  const clearInput = () => {
    setFilteredStudents([]);
  };

  return (
    <>
      <div className="search">
        <SearchBar
          search={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* {search.length == 0 && }  */}

      {search.length !== 0 && (
        <div>
          {filteredStudents.map((student) => (
            <Profile
              // Some props here //
              onChange={handleTagChange}
              onKeyPress={handleTagKeyPress}
              tag={tag}
              tags={tags}
            />
          ))}
        </div>
      )}

      {students
        .filter(
          (student) =>
            student.firstName.toLowerCase().includes(filteredStudents) ||
            student.lastName.toLowerCase().includes(filteredStudents)
        )
        .map((student) => {
          return (
            <StyledStudent>
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

                <Accordion data={student.grades} />

                {tags.filter(
                  ((tag) => tag.studentId === student.email).map((tag) => {
                    return (
                      <p className="tag">
                        {tag}
                        <span>
                          <CloseIcon onClick={() => removeTag(tag.value)} />
                        </span>
                      </p>
                    );
                  })
                )}

                <Tag
                  onChange={(e) => setTag(e.target.value)}
                  onKeyPress={handleTagKeyPress}
                  tags={tags}
                  tag={tag}
                />

                {tags
                  .filter((t) => t.studentId === student.email)
                  .map((tag) => {
                    return <p className="student-tags">{tag.value}</p>;
                  })}

                <br />

                <input
                  id="tag-filter"
                  type="text"
                  onKeyDown={handleTagKeyPress.bind(this, student.email)}
                  placeholder="Add a tag"
                />
              </div>
            </StyledStudent>
          );
        })}
    </>
  );
}

export default Students;
