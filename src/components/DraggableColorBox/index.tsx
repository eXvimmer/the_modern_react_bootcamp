import { FC } from "react";
import { withStyles, WithStyles } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { SortableElement } from "react-sortable-hoc";

const styles: { [key: string]: any } = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)",
    },
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0",
    bottom: "0",
    padding: "10px",
    color: "rgba(0, 0, 0, 0.5)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out",
  },
};

interface DraggableColorBoxProps extends WithStyles<typeof styles> {
  color: string;
  name: string;
  removeColorBox: (colorName: string) => void;
}

const DraggableColorBox: FC<DraggableColorBoxProps> = ({
  color,
  classes,
  name,
  removeColorBox,
}) => {
  const onRemoveColorBoxClick = () => {
    removeColorBox(name);
  };

  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon
          className={classes.deleteIcon}
          onClick={onRemoveColorBoxClick}
        />
      </div>
    </div>
  );
};

export default SortableElement(withStyles(styles)(DraggableColorBox));
