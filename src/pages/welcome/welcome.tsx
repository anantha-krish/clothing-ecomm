import React from "react";
import CustomButton from "../../components/custom-button/customButton.component";
import "./styles.scss";
interface Props {
  onClick?: any;
}

const Welcome = ({ onClick }: Props) => {
  return (
    <div className="welcome">
      <video autoPlay muted loop id="myWelcomeVideo">
        <source src="welcome.mp4" type="video/mp4" />
      </video>
      <div className="welcome-content">
        <h1>
          Exclusive 20% OFF
          <br /> only on Shopananth
        </h1>
        <p>
          Get 20% off on all popular brands now, offer vaild till end of July
          2021. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
          accusantium itaque consectetur, alias fugiat saepe fuga porro
          architecto voluptate recusandae nostrum, aliquid aliquam quisquam
          doloremque consequatur quas modi officiis qui.
        </p>
        <CustomButton type="button" onClick={onClick}>
          View Offers
        </CustomButton>
      </div>
    </div>
  );
};

export default Welcome;
