import { makeStyles } from "@mui/styles"

export const styles: Function = makeStyles({
    loginPage: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    loginWrapper: {
        width: "40%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
        padding: "70px 20px",
        borderRadius: "25px",
        background: "white",
    },
    person: {
        height: "0",
        width: "0",
        fontSize: "200px !important",
        color: "#0076CE"
    },
    loginTitle: {
        color: "#0076CE",
        fontWeight: "700",
        fontStyle: "oblique",
    },
    userLoginData: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        marginBottom: "20px",

    },
    userDataFeildWrapper: {
        width: "100%",
    },
    userDataFeild: {
        width: "100%"
    },
    errorText: {
        color: "red",
        padding: "8px 10px",
        opacity: "0.7",
        fontWeight: "400",
        fontSize: "20px",
        fontStyle: "oblique",
    },
    loginBtn: {
        width: "80%",
    }
})

