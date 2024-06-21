import React from "react";
import { getTranslate } from "react-redux-translates";
import { useSelector } from "react-redux";
import {
  MainContainer,
  InfoContainer,
  DetailCards,
  Ceremony,
  Bus,
  Link,
  Details,
} from "./How.styles";
//IMPORT COMPONENTS
import Line from "@atoms/line/Line";

const How = () => {
  const translate = useSelector(state => getTranslate(state.localize));
  return (
    <MainContainer id="how">
      <InfoContainer>
        <p>{translate("how.text.1")}</p>
        <p>{translate("how.text.2")}</p>
        <p>{translate("how.text.3")}</p>
      </InfoContainer>
      <DetailCards>
        <Bus>
          <Details>
            <p className="title">{translate("how.text.4")}</p>
            <p className="hour">{translate("how.text.5")}</p>
            <p className="hour">{translate("how.text.6")}</p>
          </Details>
          <Link>
            <a
              href="https://maps.app.goo.gl/ARx399JHFJWvn7bQ7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>{translate("how.text.7")}</p>
            </a>
          </Link>
        </Bus>
        <Ceremony>
          <Details>
            <p className="title">{translate("how.text.8")}</p>
            <p className="hour">{translate("how.text.9")}</p>
          </Details>
          <Link>
            <a
              href="https://maps.app.goo.gl/Ga18eH6m39VW1e9J9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>{translate("how.text.10")}</p>
            </a>
          </Link>
        </Ceremony>
      </DetailCards>
      <Line />
    </MainContainer>
  );
};

export default How;
