import { FC, ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styles } from "./loginStyle";
import { Button, Typography, TextField, Box } from "@mui/material";
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import {IUserData, IRequestOptions, ILoginData } from "./loginTypes"


const Login: FC = () => {
    const navigate = useNavigate()
    const classes = styles()
    const [userData, setUserData] = useState<IUserData>({
        email: "",
        password: ""
    })
    const [loginData, setLoginData] = useState<ILoginData>({})

    useEffect(() => {
        if (loginData.token){
            localStorage.setItem("access_token", loginData.token)
            navigate("/dashboard")
        }
    }, [loginData])

    useEffect(() => {
        if (localStorage.getItem("access_token")){
            navigate("/dashboard")
        } 
    }, [])


    function updateEmailValue (e: ChangeEvent<HTMLInputElement>){
        setUserData({
            ...userData, 
            email: e.target.value
        })
    }

    function updatePasswordValue (e: ChangeEvent<HTMLInputElement>){
        setUserData({
            ...userData, 
            password: e.target.value
        })
    }

    async function login (){
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");

        let raw = JSON.stringify({"email":userData.email,"password":userData.password});

        let requestOptions: IRequestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        };

        try{
            const response = await fetch(`${process.env.REACT_APP_BASEURL}/v1/login`, requestOptions)
            const result = await response.json()
            setLoginData(result)    
        }catch(e){
            console.log(e)
        }
    }


    return (
        <Box className={classes.loginPage}>
            <Box className={classes.loginWrapper}>
                <PersonSharpIcon fontSize="small" className={classes.person}/>
                <Typography variant="h3" className={classes.loginTitle}>
                    WELCOME
                </Typography>
                <Typography variant="subtitle1" className={classes.loginTitle}>
                    Enter your details to get sign in to your account!
                </Typography>
                <Box className={classes.userLoginData} >
                    <TextField className={classes.userDataFeild}
                        label="Email"
                        type="email"
                        margin="dense"
                        value={userData.email}
                        onChange={updateEmailValue}
                    />
                    <TextField className={classes.userDataFeild}
                        label="Password"
                        type="password"
                        margin="dense"
                        value={userData.password}
                        onChange={updatePasswordValue}
                    />
                    <Box className={classes.errorText} style={{display: loginData.error ? "inline" : "none"}}>{loginData.error && loginData.error}</Box>
                </Box>
                <Button variant="contained" size="large" className={classes.loginBtn} onClick={login}>Login</Button>
            </Box>
        </Box>
    )
}

export default Login