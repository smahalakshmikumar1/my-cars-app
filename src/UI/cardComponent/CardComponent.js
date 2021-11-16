import React from "react";
import "./CardComponent.css";

/*card component
@param {object}- imagesrc - image source
@param {object}-title - title to display
*/
const CardComponent = (props) => {
  let { imageSrc, title } = props;
  return (
    <div class="small">
      <article class="article-class">
        <div class="car-image">
          <img src={imageSrc} width="1500" height="1368" alt="" />
        </div>
        <div class="content">
          <h1 class="title">{title}</h1>
          {props.children}
        </div>
      </article>
    </div>
  );
};
export default React.memo(CardComponent);
