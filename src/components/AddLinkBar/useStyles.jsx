import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
        margin: {
                margin: theme.spacing(1),
        },
        grid: {
                justifyContent: "center",
                "& .MuiInput-root": {
                        width: "800px",
                },
        },
}));
