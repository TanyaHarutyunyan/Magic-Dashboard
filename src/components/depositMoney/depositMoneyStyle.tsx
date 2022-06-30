import { makeStyles } from "@mui/styles"
import { calculateNewValue } from "@testing-library/user-event/dist/utils"

export const styles: Function = makeStyles({
    depositMoneyModal:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        padding: "40px",
        position: "absolute",
        background: "white",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, 70%)",
        zIndex: 10,
        width: "60%",
    },
    title: {
        color: "#1064a9",
        fontWeight: 500
    },
    depositMoneyField: {
        width: "30%"
    },
    btnWrapper: {
        width: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px"
    },
    depositMoneyBtn:{
        width: "50%",
    }
})

