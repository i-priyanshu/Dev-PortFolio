import React, { useEffect, useState } from "react";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
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
    <MaterialCards>
      <ThemeProvider theme={theme}>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
              FrontEnd
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
              React
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
              Typescript
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </ThemeProvider>
    </MaterialCards>
  );
};

export default HomeCard;

const MaterialCards = styled.div`
  display: flex;
  flex-direction: row;
  background: #191919;
  justify-content: center;
`;
