import {FC} from "react"
import { styles } from "./headerStyle";
import { Box, Typography, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";


const Header: FC = () => {

    const classes = styles()
    const navigate = useNavigate()

    function logout (){
        localStorage.removeItem("access_token")
        navigate("/")
    }

    function toHomepage() {
        navigate("/dashboard")
    }

    return (
        <Box className={classes.header}>
            <Typography variant="h4" className={classes.title} onClick={toHomepage}>MAGIC DASHBOARD</Typography>
            <Button variant="contained" size="large" onClick={logout}>LOGOUT</Button>
        </Box>
    )
}

export default Header