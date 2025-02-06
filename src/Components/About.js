import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Carousel from "./Carousel";
import { Button } from "react-bootstrap";
import Destination from "./Destination";

const AboutContainer = styled.div`
  background-image: url(${require("../Assets/About.jpg")});
  background-size: cover;s
  background-position: center;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Efekti i hijes për tekst */
  padding: 20px;
   font-family: "Quicksand", serif;

`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  letter-spacing: 1.5px;
  margin: 0;
  z-index: 1;
  font-family: "Quicksand", serif;
`;

const ContentSection = styled.div`
  background-color: white;
  padding: 60px 0;
  border-top: 3px solid #8799a3;
  border-radius: 4px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Hijë që i jep thellësi */
  font-family: "Quicksand", serif;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #000;
  text-align: center;
  margin-bottom: 20px;
`;

const FourColumnsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  margin-top: 40px; /* Hapësirë midis seksionit dhe kolonave */
`;

const Column = styled.div`
  flex: 1;
  min-width: 250px;
  padding: 20px;
  color: #333;
  &:not(:last-child) {
    border-right: 0.1px solid #ddd; /* Viza e hollë e ndarjes */
    height: 250px;
  }
  box-shadow: none;
  border-radius: 0;
`;

const ColumnTitle = styled.h3`
  font-size: 1.5rem;
  color: #000;
  margin-bottom: 10px;
`;

const ColumnContent = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const FounderSection = styled.div`
  // background-color: #f9f9f9;
  padding: 60px 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
  border-top: 1px solid #8799a3;
`;
const FounderImage = styled.img`
  flex: 1;
  max-width: 400px;
  border-radius: 5px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;
const FounderContent = styled.div`
  flex: 2;
  color: #333;
  padding: 20px;
`;

const FounderName = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
`;
const FounderDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
`;
const FullWidthCarousel = styled.div`
  width: 100%;
  // background-color: #f1f1f1;
  padding: 20px 0;
`;
const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px; /* Shtoni hapësirë nga pjesa e sipërme e faqes */
`;
const FooterButton = styled(Button)`
  display: inline-block;
  align-items: center;
  margin: 10px;
  background-color: #c7b198;
  border: none;
  font-size: 1.2rem;
  font-weight: 300;
  border-radius: 2px;
  padding: 10px 30px; /* Mund të përshtasësh për masën që dëshiron */
  transition: all 0.3s ease;
  &:hover {
    background-color: #a89c7f; /* Ngjyra më e errët në hover */
    transform: translateY(-3px); /* Efekti i ngritjes kur kalon mbi të */
  }
`;
const VideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  margin-top: 40px;
`;

const VideoFrame = styled.div`
  flex: 1;
  min-width: 300px;
  aspect-ratio: 16/9;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const About = () => {
  return (
    <>
      {/* Seksoni me foton e background-it */}
      <AboutContainer>
        <Container>
          <Title>Rreth Nesh</Title>
        </Container>
      </AboutContainer>

      {/* Seksioni për themeluesin */}
      <ContentSection>
        <Container>
          <SectionTitle>Shtëpia Botuese JONALDA</SectionTitle>
          <p
            style={{
              textAlign: "center",
              color: "#555",
              fontSize: "10px",
              marginBottom: "10px",
              letterSpacing: "3px",
            }}
          >
            Njihuni me historinë tonë dhe me themeluesin.
          </p>
          <FounderSection>
            <FounderImage
              src={require("../Assets/Founder.png")}
              alt="Themeluesi"
            />
            <FounderContent>
              <FounderName>Zylyftar Plaku</FounderName>
              <FounderDescription>
                Zylyftar Plaku ka kryer shkollën e mesme dy vite në Gjimnazin
                “Bab Dudë Karbunara”, Berat, dhe dy vite në shkollën Pedagogjike
                në Fier. Është diplomuar për Gjuhë-Letërsi Shqipe dhe për kimi
                ushtarake. Ka punuar si mësues, ushtarak, dhe pas viteve 1990 si
                gazetar dhe redaktor në disa organe shtypi dhe Shtëpi Botuese.
                <br />
                <br />
                <strong>Botime të rëndësishme:</strong>
                <ul>
                  <li>
                    <em>Skrapari Visore dhe Visare</em> (Libër Studim
                    etno-kulturor)
                  </li>
                  <li>
                    <em>Kënga qytetare beratase midis traditës dhe orientit</em>{" "}
                    (Studim)
                  </li>
                  <li>
                    <em>Berati Enciklopedi</em> (Fjalor Enciklopedik për Rrethet
                    Berat, Skrapar dhe Kuçovë)
                  </li>
                  <li>
                    <em>Cicëroj si Kanarinë</em> (Vëllim me vjersha për fëmijë)
                  </li>
                  <li>
                    <em>Bilbilat në kopshtin tim</em> (Vjersha për fëmijë)
                  </li>
                  <li>
                    <em>A më gjeni dotë?</em> (Vëllimi 1 dhe 2 me gjëegjëza)
                  </li>
                  <li>
                    <em>Lamtumirë Abetare</em> (Përmbledhje antologjike me
                    vjersha, gjëegjëza, tregime dhe fabula)
                  </li>
                  <li>
                    <em>Për më shumë dije 2, 3, 4, 5</em> (Libra antologjikë për
                    nxënësit e shkollave 9-vjeçare)
                  </li>
                  <li>
                    <em>Miqtë e Fermës</em> (Libër didaktik-mësimor për fëmijë
                    parashkollor)
                  </li>
                  <li>
                    <em>Mjetet e Udhëtimit</em> (Libër didaktik-mësimor për
                    fëmijë parashkollor)
                  </li>
                  <li>
                    <em>Shkronjat e dorës</em> (Fletore didaktike për fëmijë)
                  </li>
                  <li>
                    <em>Shkronjat e shtypit</em> (Fletore didaktike për fëmijë)
                  </li>
                  <li>
                    <em>Numrat</em> (Fletore didaktike për fëmijë)
                  </li>
                  <li>
                    <em>Dashuri e humbur</em> (Roman i botuar me pseudonimin
                    Alberto Sartri)
                  </li>
                  <li>
                    <em>Puthja e Fundit</em> (Poemë)
                  </li>
                </ul>
                Është gjithashtu redaktor i shumë librave artistikë për fëmijë
                dhe të rritur.
              </FounderDescription>
            </FounderContent>
          </FounderSection>
        </Container>
      </ContentSection>

      <FullWidthCarousel>
        <Carousel />
      </FullWidthCarousel>

      <ContentSection>
        <Container>
          <SectionTitle>Si funksionon puna jonë</SectionTitle>

          <FourColumnsContainer>
            <Column>
              <ColumnTitle>Shtypja e Librave</ColumnTitle>
              <ColumnContent>
                Shtypshkronja “Jonalda” shërben për shtypjen e librave të kësaj
                shtëpie botuese dhe për autorët e tjerë që kërkojnë cilësi dhe
                kosto të ulët.
              </ColumnContent>
            </Column>

            <Column>
              <ColumnTitle>Rrjeti i Shpërndarjes</ColumnTitle>
              <ColumnContent>
                Ne kemi një rrjet të gjerë shpërndarjeje që siguron që librat e
                botuar nga “Jonalda” të arrijnë deri në çdo qytet të Shqipërisë
                dhe më gjerë.
              </ColumnContent>
            </Column>

            <Column>
              <ColumnTitle>Shërbimet e Dizajnit</ColumnTitle>
              <ColumnContent>
                Ne ofrojmë shërbime profesionale të dizajnit të kopertinave,
                redaktimit dhe korrektimit të librave për të siguruar një
                rezultat perfekt.
              </ColumnContent>
            </Column>

            <Column>
              <ColumnTitle>Bashkëpunimi me Autorët</ColumnTitle>
              <ColumnContent>
                Ne preferojmë që autorët të fillojnë dhe përfundojnë botimin tek
                ne, duke mbuluar çdo hap të procesit botues nga A në Z.
              </ColumnContent>
            </Column>
          </FourColumnsContainer>
          <SectionTitle style={{ marginTop: "40px" }}>
            Shembuj Vizualë
          </SectionTitle>
          <VideoContainer>
            <VideoFrame>
              <video controls width="100%" preload="auto">
                <source
                  src={require("../Assets/portrait.mp4")}
                  type="video/mp4"
                />
                Shfletuesi juaj nuk e mbështet videon.
              </video>
            </VideoFrame>
            <VideoFrame>
              <video controls width="100%" preload="auto">
                <source
                  src={require("../Assets/landscape.mp4")}
                  type="video/mp4"
                />
                Shfletuesi juaj nuk e mbështet videon.
              </video>
            </VideoFrame>
          </VideoContainer>

          {/* FooterContainer për të qendruar butonin */}
          <FooterContainer>
            <FooterButton href="/">Katalogu </FooterButton>
          </FooterContainer>
        </Container>
        <Destination />
      </ContentSection>
    </>
  );
};

export default About;
