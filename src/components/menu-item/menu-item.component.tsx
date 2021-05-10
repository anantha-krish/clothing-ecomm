import React from "react";
import { useHistory } from "react-router-dom";
import "./menu-item.component.scss";
interface Props {
 title: string;
  imageUrl: string;
  size?: string;
  linkUrl:string;
}

const MenuItem = ({  imageUrl,
  title,
   size = "",
   linkUrl, 
  }: Props) => {
    const history = useHistory();

  return (
    <div
      className={`${size} menu-item`}
      onClick={
        ()=>{history.push(`/${linkUrl}`)}
      }
    >
      <div className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
