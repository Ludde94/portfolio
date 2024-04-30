import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">Om mig</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hej, mitt namn är <strong>Ludvig Jenisch</strong>, och jag bor i utkanten av Malmö med min lilla familj. Jag brinner för systemvetenskap och söker nu möjligheter att påbörja min framtida karriär.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">

            Jag har genomfört systemutvecklarprogrammet vid Högskolan Kristianstad. Under mina studier deltog jag i en rad spännande kurser och projekt, vilket har gett mig en stabil grund inom utveckling. Jag ser fram emot att fortsätta att utveckla min kunskap och erfarenhet inom området.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            Som person betraktar jag mig själv som en nyfiken, kommunikativ och ödmjuk lagspelare. Jag tror på kraften i samarbete och gemensamt arbete mot gemensamma mål. Jag är övertygad om att dessa egenskaper kommer att vara till stor nytta för mig i mitt framtida arbete inom denna branch.
              <div className="tagline2">
              Jag har blivit bekant med att använda följande tekniker:
              </div>
            </ScrollAnimation>
            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
