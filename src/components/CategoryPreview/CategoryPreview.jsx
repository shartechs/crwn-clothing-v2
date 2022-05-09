import { Link } from "react-router-dom";

import { CategoryPreviewStyled } from "./CategoryPreview.styled";
import ProductCard from "../ProductCard/ProductCard";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewStyled>
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </CategoryPreviewStyled>
  );
};

export default CategoryPreview;
