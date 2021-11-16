import React from "react";

/*Item description component
@param- {array}- data - to populate items
@returns Item description component
*/
const ItemDescriptionComponent = (props) => {
  let { data } = props;
  return (
    <div className="vehicle-details">
      <p>
        enginePowerPS:<strong>{data.enginePowerPS}</strong>
      </p>
      <p>
        enginePowerKW:<strong>{data.enginePowerKW}</strong>
      </p>
      <p>
        fuelType:<strong>{data.fuelType}</strong>
      </p>
      <p>
        bodyType:<strong>{data.bodyType}</strong>
      </p>
      <p>
        bodyType:<strong>{data.engineCapacity}</strong>
      </p>

      {props.children}
    </div>
  );
};
export default ItemDescriptionComponent;
