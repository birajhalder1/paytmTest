import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    marginLeft: 500,
    marginTop: 50
  },
  media: {
    height: 140
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           <h2>Rewards Point</h2>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Credit point 5 <br/>
            Money 120/-
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="outlined" color="secondary">
          Encash Money
        </Button>
        
      </CardActions>
    </Card>
  );
}
