import { useEffect, FC } from "react";
import { Box, Button } from "@mui/material";
import Header from "../header/header";
import { styles } from "./userStyle";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../redux/usersReducer/usersReducerTypes";
import { fetchData } from "../../redux/usersReducer/usersReducer";
import UpdateUserModal from "../updateUser/updateUser";


const User: FC = () => {
    const dispatch: any = useDispatch()
    
    useEffect(() => {
        dispatch(fetchData())
    }, [])

    const isOpen = useSelector((state:IState) => {
        return state.updateModalReducer.isOpen
    }) 

    const usersList = useSelector((state: IState) => {
        return state.usersReducer.users[0]
    })

    function updateUser(){
        dispatch({
            type: "setTrue",
            payload: true
        })
    }

    const classes = styles()
    return (
        <Box className={classes.userWrapper}>
            <Header />
            <UpdateUserModal />
            <Box className={classes.userInfoWrapper} style={{filter: isOpen ? "blur(30px)" : "none"}}>
                <Box className={classes.title}>User</Box>
                <Box className={classes.userInfo}>
                    {usersList?.filter((user) => {
                        return user._id === localStorage.getItem("selected_user_id")
                    }).map((filteredUser, selectedUserId) => {
                        return <Box key={selectedUserId}>
                            <Box className={classes.fieldsWrapper}>
                            <Box className={classes.field}><span>Name:</span>{filteredUser.name}</Box>
                            <Box className={classes.field}><span>Email:</span> {filteredUser.email}</Box>
                            <Box className={classes.field}><span>Phone:</span> {filteredUser.phone}</Box>
                            </Box>
                            <Box className={classes.fieldsWrapper}>
                            <Box className={classes.field}><span>Master:</span>{filteredUser.master}</Box>
                            <Box className={classes.field}><span>Affiliate:</span>{filteredUser.affiliate}</Box>
                            <Box className={classes.field}><span>Active Bonus:</span>{filteredUser.active_bonus}</Box>
                            </Box >
                            <Box className={classes.fieldsWrapper}>
                            <Box className={classes.field}><span>Referrer Count:</span> {filteredUser.referrer_count}</Box>
                            <Box className={classes.field}><span>Referrer:</span>{filteredUser.referrer}</Box>
                            <Box className={classes.field}><span>Balance: </span>{filteredUser.balance}</Box>
                            </Box>
                        </Box>
                    })}
                <Button variant="contained" size="large" className={classes.updateBtn} onClick={updateUser}>Update User</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default User