"use client";

import { Room } from "./Room";
import { CollaborativeEditor } from "../components/CollaborativeEditor";

export default function Editor(
  { tabs, setTabs, activeTab, setActiveTab}: {tabs: any, setTabs: any, activeTab: any, setActiveTab: any}
) {
  console.log("Editor", activeTab);
  console.log("Editor", tabs);

  // // dummy data
  // tabs = [
  //   { id: "welcome", name: "Welcome!!" },
  // ]
  // activeTab = "welcome";
  // setTabs = () => {};
  // setActiveTab = () => {};

  return (
    <div className="divmain">
      <Room roomId={activeTab}>
        <CollaborativeEditor 
          tabs = {tabs}
          setTabs = {setTabs}
          activeTab = {activeTab}
          setActiveTab = {setActiveTab}
        />
      </Room>
    </div>
  );
}
