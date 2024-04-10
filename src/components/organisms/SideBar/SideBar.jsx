import React from "react";
import Logo from "../../atoms/Logo/Logo";
import SideBarTab from "../../molecules/SideBarTabs/SideBarTab";
import OverviewIcon from "../../../assets/dashboard.png";
import { NavLink } from "react-router-dom";
import "./SideBar.scss"

const items = [
  {
    title: "Starships",
    backgroundColor: "#a9c1ff",
    route: '/dashboard/starships'
  },
  {
    title: "People",
    backgroundColor: "#ffa9ec",
    route: '/dashboard/people'
  },
  {
    title: "Species",
    backgroundColor: "#fdffa9",
    route: '/dashboard/species'

  },
];
const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="firstDiv">
        <Logo />
        <NavLink to='/dashboard/overview'>
          <SideBarTab icon={true} title={"Overview"} src={OverviewIcon} />
        </NavLink>
      </div>
      <div className="secondDiv">
        {items.map((item, idx) => {
         return  <NavLink key={idx} to={item.route}>
            <SideBarTab
              title={item.title}
              divBackgroundColor={item.backgroundColor}
            />
          </NavLink>;
        })}
      </div>
    </div>
  );
};

export default SideBar;
