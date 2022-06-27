import { makeStyles } from "@mui/styles"

export const styles: Function = makeStyles({
    dashboardWrapper: {
        position: "relative"
    },
    title:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#1064a9",
        fontSize: "50px",
        fontWeight: 700,
        padding: "20px 10px"
    },
    filterUserByEmail: {
        marginBottom: "10px !important",
        marginLeft: "10px !important"
    },
    listWrapper: {
        width: "100%",
        position: "absolute",
        top: "100px",
        left: "0",
        zIndex: "1"
    },
    headRow:{
        background: "#d1e7fa !important",
        color: "#c9dcec",
        fontSize: "20px"
    },
    cell:{
        color: "#1064a9 !important",
        fontSize: "23px !important",
        padding: "20px !important",
        fontWeight: 600
    },
    bodyRow: {
        cursor: "pointer",
        '&:hover': {
            background: "#e8eaec",
            height: "65px"
         },
    }
})