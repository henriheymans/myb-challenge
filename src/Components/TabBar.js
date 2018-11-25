import React from "react";
import "./TabBar.css";

const TabBar = ({ activePageTitle, children, selectActiveTab }) => {
  const buttons = children.map((button, id) => (
    <button
      key={id}
      onClick={() => selectActiveTab(button.props.title)}
      className="btn btn-info m-1"
    >
      {button.props.title}
    </button>
  ));

  return (
    <div className="row justify-content-center tabs-container">
      <div className="col-12 text-center">{buttons}</div>
      <div className="col-12 text-center">
        <h2 className="page-title">{activePageTitle}</h2>
      </div>
      <div className="page-separator" />
    </div>
  );
};
export default TabBar;
