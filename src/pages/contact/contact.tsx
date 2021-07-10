import React from "react";
import Github from "../../assets/github.png";
import LinkedIn from "../../assets/linkedIn.png";
import Profile from "../../assets/profile.jpg";
import {
  ContactDetails,
  ContactPageContainer,
  Label,
  ProfileIconContainer,
  SocialIconContainer,
} from "./contact.styles";
const Contact = () => {
  return (
    <ContactPageContainer>
      <ProfileIconContainer>
        <img src={Profile} alt="Anantha Krishnan's profile pic" />
      </ProfileIconContainer>
      <ContactDetails>
        <li>
          <Label>Name:</Label><span>Anantha Krishnan M</span>
        </li>
        <li>
          <Label>Email:</Label>
          <a href="mailto:anantha_krishnan@outlook.com">
            anantha_krishnan@outlook.com
          </a>
        </li>
        <li>
          <SocialIconContainer>
            <li>
              <a
                href="https://www.linkedin.com/in/anantha-krishnan"
                rel="noreferrer"
                target="_blank"
              >
                <img src={LinkedIn} alt="LinkedIn link" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/anantha-krish"
                rel="noreferrer"
                target="_blank"
              >
                <img src={Github} alt="Github link" />
              </a>
            </li>
          </SocialIconContainer>
        </li>
      </ContactDetails>
    </ContactPageContainer>
  );
};

export default Contact;
