"use client";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import { motion } from "framer-motion";
import InView from "./hooks/InView";
import { Typography, useMediaQuery } from "@mui/material";
import { Card, Button } from "@nextui-org/react";
import { Collapse, Text, Grid, NextUIProvider } from "@nextui-org/react";
import { Inventory } from "@mui/icons-material";

const styles = {
  sectionOne: {},
};

const content = {};

const pageOne =
  "https://cdn.discordapp.com/attachments/1120241652213223516/1120241708144271370/view-famous-arc-de-triomphe-paris.jpg";

const pageTwo =
  "https://cdn.discordapp.com/attachments/1120241652213223516/1120257976150798357/landscape-field-covered-greenery-with-hills-background-tarn-et-garonne-france.jpg";

const pageThree =
  "https://cdn.discordapp.com/attachments/1120241652213223516/1120265391076294786/massif-des-calanques-surrounded-by-sea-sunlight-blue-sky-france.jpg";

const Content = () => {
  const mobile = useMediaQuery("(max-width: 720px)");
  return (
    <NextUIProvider>
      <Fullpage>
        <FullPageSections>
          {/*section 1 */}
          <FullpageSection
            style={{
              height: "100vh",
              padding: "1em",
              backgroundImage: `url(${pageOne})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/*polygon(0% 19px, 40px 19px, 40px 100%, 80px calc(100% - 19px), 100% calc(100% - 19px), 100% 0%, 0% 0%) */}
            {/*https://cdn.discordapp.com/attachments/1120241652213223516/1120265391076294786/massif-des-calanques-surrounded-by-sea-sunlight-blue-sky-france.jpg */}
            <InView>
              <Card
                css={{
                  w: mobile ? "80vw" : "50vw",
                  d: "flex",
                  h: "fit-content",
                }}
              >
                <Card.Body>
                  <center>
                    <Typography
                      fontWeight={"bolder"}
                      variant={"h4"}
                      color={"black"}
                    >
                      Go4French - the best way to learn French!
                    </Typography>
                  </center>
                </Card.Body>
              </Card>
              <center>
                <Button
                  css={{
                    mt: "4vh",
                  }}
                  shadow
                  color="gradient"
                  auto
                >
                  Contact Us
                </Button>
              </center>
            </InView>
          </FullpageSection>
          {/* section 2 */}
          <FullpageSection
            style={{
              padding: "1em",
              backgroundImage: `url(${pageTwo})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <InView>
              <Card
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% calc(100% - 19px), 80px calc(100% - 19px), 40px 100%, 40px calc(100% - 19px), 0% calc(100% - 19px))",
                  WebkitClipPath:
                    " polygon(0% 0%, 100% 0%, 100% calc(100% - 19px), 80px calc(100% - 19px), 40px 100%, 40px calc(100% - 19px), 0% calc(100% - 19px))",
                }}
                css={{
                  w: mobile ? "80vw" : "50vw",
                  d: "flex",
                  mh: "40vh",
                  overflow: "auto",
                }}
              >
                <Card.Body>
                  <center>
                    <Typography
                      fontWeight={"bolder"}
                      variant={"h6"}
                      color={"black"}
                    >
                      Bonjour, my name is Madame M. I'm a recently retired
                      French teacher with over 32 years of experience in public
                      schools and universities. I also lived in France as a part
                      of the Fulbright program. This website is designed to
                      empower and guide you on your journey to becoming a fluent
                      French speaker. Discover a treasure trove of interactive
                      lessons, engaging activities, and comprehensive study
                      materials that cater to all levels of proficiency. Whether
                      you're a beginner eager to embark on your language
                      learning adventure or an advanced learner looking to
                      refine your skills, we've got you covered.
                    </Typography>
                  </center>
                </Card.Body>
              </Card>
            </InView>
          </FullpageSection>
          {/* section 3 */}
          <FullpageSection
            style={{
              padding: "1em",
              backgroundImage: `url(${pageThree})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Grid.Container
              gap={2}
              css={{
                w: "100%",
                d: "flex",
                justifyContent: "center",
              }}
            >
              <InView left={true}>
                <Grid>
                  <Card
                    css={{
                      w: mobile ? "80vw" : "50vw",
                      d: "flex",
                      h: "fit-content",
                    }}
                  >
                    <Card.Body>
                      <center>
                        <Typography
                          fontWeight={"bolder"}
                          variant={"h4"}
                          color={"black"}
                        >
                          Why choose Go4French?
                        </Typography>
                      </center>
                    </Card.Body>
                  </Card>
                </Grid>
              </InView>
              <InView right={true}>
                <Grid>
                  <Collapse.Group
                    css={{
                      w: mobile ? "80vw" : "50vw",
                    }}
                    shadow
                  >
                    <Collapse title="Expertly Crafted Content">
                      <Text>
                        Benefit from the wisdom and expertise of a seasoned
                        French teacher, who has curated a wealth of resources to
                        make your learning experience enjoyable and effective.
                      </Text>
                    </Collapse>
                    <Collapse title="Tailored Learning Path">
                      <Text>
                        Our website offers a personalized learning path that
                        adapts to your individual needs and goals. Progress at
                        your own pace and unlock new levels of proficiency.
                      </Text>
                    </Collapse>
                    <Collapse title="Interactive Practice">
                      <Text>
                        Reinforce your knowledge through immersive exercises,
                        interactive quizzes, and real-world scenarios. Build
                        confidence in your speaking, listening, reading, and
                        writing skills.
                      </Text>
                    </Collapse>
                    <Collapse title="Cultural Immersion">
                      <Text>
                        Dive into the rich tapestry of French culture, history,
                        and traditions. Discover the nuances of the language and
                        gain a deeper appreciation for the Francophone world
                      </Text>
                    </Collapse>
                  </Collapse.Group>
                </Grid>
              </InView>
            </Grid.Container>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </NextUIProvider>
  );
};

export default Content;
