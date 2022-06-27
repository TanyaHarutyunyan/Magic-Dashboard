import { makeStyles } from "@mui/styles"
import { calculateNewValue } from "@testing-library/user-event/dist/utils"

export const styles: Function = makeStyles({
    updateUserModal:{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "40px",
        position: "absolute",
        background: "white",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, 30%)",
        zIndex: 10,
        width: "40%"
    },
    title: {
        color: "#1064a9",
        fontWeight: 500
    }
})

