import React from "react";
import Directory from "../../components/directory/directory.component";
import "./homepage.component.scss";
interface Props {}

const Homepage = (props: Props) => {
  return (
    <div className="homepage">
     <Directory/>
    </div>
  );
};

export default Homepage;
