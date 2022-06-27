import { makeStyles } from "@mui/styles"

export const styles: Function = makeStyles({
    userWrapper:{
        position: "relative"
    },
    userInfoWrapper:{
        width: "100%",
        position: "absolute",
        top: "100px",
        left: "0",
        zIndex: "1"
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
    userInfo: {
        background: "white",
        padding: "50px 40px 90px 40px",
        borderRadius: "10px"
    },
    fieldsWrapper: {
        display: "flex", 
        justifyContent: "space-around",
        fontSize: "20px",
        marginBottom: "20px",
        '& span': {
            color: '#1064a9ed',
            fontWeight: 700,
            marginRight: "15px"
        }
    },
    field: {
        borderBottom: "2px solid #1064a9",
        padding: "20px 10px",
        width: "30%"
    },
    updateBtn: {
        margin: "20px 20px !important",
        float: "right",
        widht: "30% !important"
    }
})

