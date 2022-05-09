import { useNavigate } from "react-router-dom";
import { DirectoryItemStyled, BackgroundImage } from "./DirectoryItem.styled";

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  const { title, imageUrl, route } = category;
  return (
    <DirectoryItemStyled onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </DirectoryItemStyled>
  );
};

export default DirectoryItem;
