import React, {useState} from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */
    const [activeTab, setActiveTab] = useState('')

  let detailsToDisplay = activeTab === 'person' ? <div>I'm person</div>: activeTab === 'camera' ? <div>Camera</div> : activeTab === 'glass' ? <div>Glass</div> : activeTab === "other" ? <div>Other</div> : null;

  

  return (
    <div>
      {activeTab}
      <MenuBar activeTab={activeTab} setActiveTab={setActiveTab} />
      {detailsToDisplay}
      {displayedPage(activeTab)}
      <DisplayedPage2 activeTab={activeTab} /> 

    </div>
  );



  function displayedPage(activeTab){

    if(activeTab ==='person'){
    return <Profile />
  }else if(activeTab === 'camera'){
    return <Photos />
  }else if(activeTab === 'glass'){
    return <Cocktails />
  }else if(activeTab === 'other'){
    return <Pokemon />
  }
}

  function DisplayedPage2({activeTab}){
  return (
    activeTab === 'person' ? <Profile /> : 
    activeTab === 'camera' ? <Photos /> :
    activeTab === 'glass' ? <Cocktails /> : 
    activeTab === 'other' ? <Pokemon /> :
    null
  )
}

}


export default MainBox;
