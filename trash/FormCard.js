import classes from "../css/FormCard.module.css";

function FormCard(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default FormCard;
