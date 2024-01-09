import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          quos doloribus, non pariatur est id accusamus qui tenetur aspernatur,
          explicabo culpa debitis vero fugit impedit quis adipisci.
          Voluptatibus, earum sint?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          nihil eaque magnam odit fugiat iste iusto ab maiores distinctio,
          consequatur modi repellat, ut architecto! Ratione facilis voluptate
          asperiores ab nihil?
        </p>
      </div>
    </div>
  );
};
export default DescriptionBox;
