import { Link } from 'react-router-dom';

function CategoryItem(props) {
  const {
    // idCategory,
    strCategory,
    strCategoryThumb,
    strCategoryDescription } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="card-content">
        <span className="card-title">{strCategory}</span>
        <p>{strCategoryDescription.slice(0, 61)}...</p>
      </div>
      <div className="card-action">
        <Link to={`/category/${strCategory}`} className="btn">
          Смотреть категорию
        </Link>
      </div>
    </div>
  );
}

export { CategoryItem }
