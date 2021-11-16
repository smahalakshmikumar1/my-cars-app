import React from "react";
import Header from "./header/Header";
import LoadingIndicator from "./loadingIndicator/LoadingIndicator";

/*Header section component
@param- {object}-title
@param -{boolean}-isLoading
*/

const HeaderSection = ({ title, isLoading }) => {
  return (
    <>
      <Header />
      {isLoading && <LoadingIndicator></LoadingIndicator>}
      <h1>{title}</h1>
    </>
  );
};
export default HeaderSection;
