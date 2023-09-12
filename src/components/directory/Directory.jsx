import DirectoryItem from "../directory-item/DirectoryItem";
import "./directory.styles.scss";

function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Directory;
