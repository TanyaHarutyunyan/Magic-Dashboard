import { useEffect, FC, useState } from "react";
import { Box, Button } from "@mui/material";
import Header from "../header/header";
import { styles } from "./userStyle";
import { useDispatch, useSelector } from "react-redux";
import { IState, IUsers } from "../../redux/usersReducer/usersReducerTypes";
import { fetchData } from "../../redux/usersReducer/usersReducer";
import UpdateUserModal from "../updateUser/updateUser";
import DepositMoneyModal from "../depositMoney/depositMoney";


const User: FC = () => {
    const dispatch: any = useDispatch()
    const [selectedUser, setSelectedUser] = useState<IUsers>()
    
    useEffect(() => {
        dispatch(fetchData())
    }, [])

    const isOpen = useSelector((state:IState) => {
        return state.updateModalReducer.isOpen
    }) 

    const isOpenDeposit = useSelector((state:IState) => {
        return state.depositMoneyReducer.isOpen
    })

    function updateUser(){
        dispatch({
            type: "setTrue",
            payload: true
        })
    }

    function depositMoney(){
        console.log("clicked")
        dispatch({
            type: "setDepositTrue",
            payload: true
        })
    }

    useEffect(() => {
        const bearerToken = localStorage.getItem("access_token")
        const selected_user_id = localStorage.getItem("selected_user_id");
        let myHeaders: Headers = new Headers();
        myHeaders.append("Authorization", `Bearer ${bearerToken}`);

        let requestOptions = {
          method: 'GET',
          headers: myHeaders,
        };

        fetch(`https://magic-dashboard-api.herokuapp.com/api/v1/users/view/${selected_user_id}`, requestOptions)
          .then(response => response.json())
          .then(result => setSelectedUser(result))
          .catch(error => console.log('error', error));
            }, [])

    const classes = styles()
    return (
        <Box className={classes.userWrapper}>
            <Header />
            <UpdateUserModal />
            <DepositMoneyModal />
            <Box className={classes.userInfoWrapper} style={{filter: isOpen || isOpenDeposit ? "blur(30px)" : "none"}}>
                <Box className={classes.title}>User</Box>
                <Box className={classes.userInfo}>
                <Box>
                    <Box className={classes.fieldsWrapper}>
                    <Box className={classes.field}><span>Name:</span>{selectedUser?.name}</Box>
                    <Box className={classes.field}><span>Email:</span> {selectedUser?.email}</Box>
                    <Box className={classes.field}><span>Phone:</span> {selectedUser?.phone}</Box>
                </Box>
                <Box className={classes.fieldsWrapper}>
                    <Box className={classes.field}><span>Master:</span>{selectedUser?.master}</Box>
                    <Box className={classes.field}><span>Affiliate:</span>{selectedUser?.affiliate}</Box>
                    <Box className={classes.field}><span>Active Bonus:</span>{selectedUser?.active_bonus}</Box>
                </Box >
                <Box className={classes.fieldsWrapper}>
                    <Box className={classes.field}><span>Referrer Count:</span> {selectedUser?.referrer_count}</Box>
                    <Box className={classes.field}><span>Referrer:</span>{selectedUser?.referrer}</Box>
                    <Box className={classes.field}><span>Balance: </span>{selectedUser?.balance}</Box>
                </Box>
                <Box className={classes.fieldsWrapper}>
                    <Box className={classes.field}><span>Verification:</span> {selectedUser?.verification}</Box>
                    <Box className={classes.field}><span>Status: </span>{String(selectedUser?.status)}</Box>
                    <Box className={classes.field}><span>ID: </span>{selectedUser?._id}</Box>
                </Box>
                </Box>
                <Button variant="contained" size="large" className={classes.updateBtn} onClick={updateUser}>Update User</Button>
                <Button variant="contained" size="large" className={classes.updateBtn} onClick={depositMoney}>Deposit Money</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default User