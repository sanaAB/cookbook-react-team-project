import React from "react";
import "./Home.css";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Header from "../Header/Header";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
import asparagusImage from "./asparagus-blurry2.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    maxHeight: 250,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  media: {
    height: 150,
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Grid
        container
        className="home"
        style={{
          backgroundImage: "url(" + asparagusImage + ")",
          backgroundSize: "cover",
        }}
      >
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="showcard">
            <Link to="/breakfast">
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    className={classes.media}
                    alt="Breakfast"
                    image="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
                    title="Breakfast"
                  />
                  <CardContent>
                    <div className={classes.text}>
                      <span className="cardtitle">Breakfast</span>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="showcard">
            <Link to="/lunch">
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    className={classes.media}
                    alt="Lunch"
                    image="https://libbyshootsfood.com/wp-content/uploads/2018/12/002_Food_Palm_Beach_Food_Photographer_Luxury_restaurant_Sant_Ambroseus-1.jpg"
                    title="Lunch"
                  />
                  <CardContent>
                    <span className="cardtitle">Lunch</span>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="showcard">
            <Link to="/dinner">
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    className={classes.media}
                    alt="Dinner"
                    image="https://dl.splento.com/cdn/2019/10/11/o_1d1nuei2m120v2p0198et02uf1j.jpg"
                    title="Dinner"
                  />
                  <CardContent>
                    <span className="cardtitle">Dinner</span>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
