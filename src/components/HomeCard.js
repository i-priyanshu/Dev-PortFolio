import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import CardMedia from "@material-ui/core/CardMedia";
import { FrontEndSVG, ReactSVG, TypeSVG } from "./svgs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    paddingTop: "2rem",
    paddingBottom: "2rem",
    margin: 10,
    background: "#2e2e2e",
    textAlign: "center",
  },
  media: {
    height: 140,
  },
});

let theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

theme = responsiveFontSizes(theme);

const HomeCard = () => {
  const classes = useStyles();

  return (
    <div>
      <ThingsTitle>Things I Love</ThingsTitle>
      <MaterialCards>
        <ThemeProvider theme={theme}>
          <Card className={classes.root}>
            <CardImg>
              <FrontEndSVG />
            </CardImg>
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                FrontEnd
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                I'm more front end focused and love to work with Reactjs as well
                as pure HTML, CSS .
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.root}>
            <CardImg>
              <ReactSVG />
            </CardImg>
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                React
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                React has made my life a lot easier with Front-End development.
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.root}>
            <CardImg>
              <TypeSVG />
            </CardImg>
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                Typescript
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                The best part about typescript is that, it tells you beforehand
                about simple error. this has made my life a lot easier.
              </Typography>
            </CardContent>
          </Card>
        </ThemeProvider>
      </MaterialCards>
    </div>
  );
};

export default HomeCard;

const MaterialCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 6rem;
  @media (max-width: 768px) {
    display: block;
    margin-left: 5rem;
  }

  @media (max-width: 400px) {
    margin-left: 2rem;
  }
`;

const ThingsTitle = styled.h1`
  text-align: center;
  color: white;
  margin-bottom: 4rem;
`;

const CardImg = styled.div`
  margin-left: 6rem;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #8a2be2;
  color: #f8f8f8;

  svg {
    height: 100px;
    line-height: 100px;
  }
`;
