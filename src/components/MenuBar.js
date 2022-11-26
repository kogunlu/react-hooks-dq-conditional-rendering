import React from "react";

function MenuBar(props) {
  /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  // function clickHandler(tab){
  //   props.setActiveTab(tab)
  // }



  return (
    <div className="ui four item menu">
      <span 
      onClick={() => props.setActiveTab(activeTab => activeTab = "person")} 
      className={`item ${props.activeTab === 'person' ? "active": null}`}>
        <i className="user large icon" />
      </span>

      <span 
      onClick={() => props.setActiveTab(activeTab => activeTab = "camera")}  
      className={`item ${props.activeTab === 'camera' ? "active": null}`}>
        <i className="photo large icon" />
      </span>

      <span 
      onClick={() => props.setActiveTab(activeTab => activeTab = "glass")}  
      className={`item ${props.activeTab === 'glass' ? "active": null}`}>
        <i className="cocktail large icon" />
      </span>

      <span 
      onClick={() => props.setActiveTab(activeTab => activeTab ="other")}  
      className={`item ${props.activeTab === 'other' ? "active": null}`}>
        <i className=" themeisle large icon" />
      </span>
    </div>
  );
}

export default MenuBar;
