import { makeStyles } from "@mui/styles"
import { calculateNewValue } from "@testing-library/user-event/dist/utils"

export const styles: Function = makeStyles({
    updateUserModal:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        padding: "40px",
        position: "absolute",
        background: "white",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, 30%)",
        zIndex: 10,
        width: "90%",
    },
    title: {
        color: "#1064a9",
        fontWeight: 500
    },
    updateField: {
        width: "30%"
    },
    someDiv: {
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        flexWrap: "wrap",
    },
    btnWrapper: {
        width: "90%",
        display: "flex",
        justifyContent: "center",
        gap: "10px"
    },
    updateBtn:{
        width: "50%",
    }
})

