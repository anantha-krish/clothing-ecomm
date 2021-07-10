import React, { useState } from "react";
import Directory from "../../components/directory/directory.component";
import Welcome from "../welcome/welcome";

import { HomepageContainer } from "./homepage.styles";
interface Props {}

const Homepage = (props: Props) => {
  const [hideHomePage, sethideHomePage] = useState(true);
  return (
    <>
      {hideHomePage ? (
        <Welcome onClick={() => sethideHomePage(!hideHomePage)} />
      ) : (
        <HomepageContainer>
          <Directory />
        </HomepageContainer>
      )}
    </>
  );
};

export default Homepage;
