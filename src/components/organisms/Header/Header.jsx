import React, { useContext } from "react";
import "./Header.scss";
import Profile from "../../molecules/Profile/Profile";
import Icon from "../../atoms/Icon/Icon";
import Notifications from "../../../assets/notifications.png";
import MoreOptions from "../../../assets/ellipsis.svg";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import BackArrow from "../../../assets/chevron_right.png";
import { AppContext } from "../../../Context";
import { verifySelectedStatus } from "../../utils/helpers";

const Header = () => {
  const { selectedItem, setSelectedItem } = useContext(AppContext);

  const handleClick = (obj) => {
    const newObj = {};
    const keys = Object.keys(obj);
    for (const key of keys) {
      if (obj[key] !== "") {
        newObj[key] = "";
      }
    }
    setSelectedItem({ ...selectedItem, ...newObj });
  };

  return (
    <div className="header">
      {
        <div
          onClick={() => handleClick(selectedItem)}
          style={{
            visibility: verifySelectedStatus(selectedItem)
              ? "visible"
              : "hidden",
          }}
        >
          <Icon src={BackArrow} altText={"navigation icon"} />
          <Paragraph textProps={"#a4a7b7-16-400"}>Back</Paragraph>
        </div>
      }
      <div className="rightDiv">
        <Icon src={Notifications} altText={"notification icon"} />
        <Profile />
        <Icon src={MoreOptions} altText={"more options"} />
      </div>
    </div>
  );
};

export default Header;
