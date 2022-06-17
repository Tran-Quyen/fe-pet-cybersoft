import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 700,
    wordBreak: "break-all",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    alignItems: "center",
  },
  column: {
    flexBasis: "25%",
    wordBreak: "break-all",
  },
  columnSQLHeading: {
    flexBasis: "5%",
  },
  columnSQL: {
    flexBasis: "95%",
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
    height: "100%",
  },
  code: {},
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  pre: {
    whiteSpace: "pre-wrap",
    wordBreak: "break-all",
    "& code": {
      fontSize: "12px",
    },
  },
}));
