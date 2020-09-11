import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "#f6f7f7",
  },
  gridList: {
    width: 1000,
    height: "auto",
  },
}));

export default function ImageGridList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={6}>
        {props.images.map((tile) => (
          <GridListTile key={tile.urls.small} cols={tile.cols || 2}>
            <img src={tile.urls.regular} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
