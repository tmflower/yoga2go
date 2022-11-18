// TODO: change onClick function so that it takes user to poseslist for selected category
import "../styles/Category.css";

export function Category({ name, description }) {
  return (
    <>
      <div className="page-container">
        <div className="container">
          <div className="placeholder">Image</div>
          <div className="box-container">
            <h1 className="category-titles">{name}</h1>
            <hr className="divider" />
            <p className="category-description">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
