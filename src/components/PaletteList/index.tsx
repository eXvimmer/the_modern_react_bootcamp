import { Component } from "react";
import { withStyles, WithStyles } from "@mui/styles";
import { IPalette } from "../../utils/seedColors";
import MiniPalette from "../MiniPalette";

// TODO: find a bettery type for styles
const styles: { [key: string]: any } = {
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "auto", // added by me
  },

  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },

  nav: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    color: "white",
  },

  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
};

interface PaletteListProps extends WithStyles<typeof styles> {
  palettes: IPalette[];
}

class PaletteList extends Component<PaletteListProps> {
  render() {
    const { palettes, classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
          </nav>
          <div className={classes.palettes}>
            {palettes.map(palette => (
              <MiniPalette {...palette} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
