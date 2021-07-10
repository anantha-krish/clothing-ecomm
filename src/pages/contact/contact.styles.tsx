import styled from "styled-components";

export const SocialIconContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  img {
    width: 30px;
    margin: 10px;
  }
`;
export const ContactDetails = styled.ul`
  list-style: none;
  li {
    font-size: 18px;
  }
`;
export const ContactPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 50px;
`;
export const Label = styled.span`
  display: inline-block;
  margin-right: 5px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const ProfileIconContainer = styled.div`
  img {
    height: 200px;
    border-radius: 50%;
  }
`;
