import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn" >
              <TypeAnimation
                cursor={false}
                sequence={[
                  'Hej, jag heter Ludvig.',
                  () => setShowSubtitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    'En nyexad systemutvecklare.',
                    1000,
                    'En nyexad Front-end utvecklare.',
                    1000,
                    'En nyexad Back-end utvecklare.',
                    1000,
                    'Med en kandidatexamen i systemvetenskap.',
                    1000,
                    'Med en passion för ständigt lärande',
                    1000,
                    'Alltid nyfiken på att utforska nya tekniker.',
                    1000,
                    'En.... trevlig kille?',
                    1000,
                    "Ok...En väldigt bra teamplayer!",
                    1000,
                    "Hmm...ladda ner mitt CV och kolla vad jag gjort innan",
                    1000,
                    "Ok...  jag har snart inga fler ideér...",
                    1000,
                    "Hmm... scrolla ner för att se några av mina tidigare projekt...",
                    300,
                    () => setShowScrollDown(true),
                    1000,
                    "Fortfarande...",
                    1000,
                    "Fortfarande... här?",
                    1500,
                    "Detta har varit intressant, jag startar om loopen nu!",
                    1000,
                    "Ha det bra så länge :)",
                    500,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }
            </ScrollAnimation>

          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image
                src="/man-svgrepo-com.svg"
                alt="man-svgrepo"
              />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown &&<ScrollAnimation animateIn="flipInX" offset={0}>
        <ScrollDown to="projects" id="scrollDown">
          <ScrollLink>
            Scrolla ner
            <img
              src="/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
        </ScrollAnimation>}
      </HeroContainer>
    </main>
  );
}

export default Hero;
