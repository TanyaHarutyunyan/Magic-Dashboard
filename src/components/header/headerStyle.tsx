import { makeStyles } from "@mui/styles"

export const styles: Function = makeStyles({
    header: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        backgroundColor: "#1064a9",
        padding: "20px 50px",
        zIndex: "2"
    },
    title: {
        color: "white",
        fontWeight: 700,
    }
})