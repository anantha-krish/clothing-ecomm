import React from "react";
import Directory from "../../components/directory/directory.component";

import { HomepageContainer } from "./homepage.styles";
interface Props {}

const Homepage = (props: Props) => {
  return (
    <HomepageContainer>
      <Directory />
    </HomepageContainer>
  );
};

export default Homepage;
