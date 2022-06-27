import React, { useEffect, FC, useState } from "react"
import Header from "../header/header";
import { useNavigate } from "react-router-dom";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField} from '@mui/material';
import { styles } from "./dashboardStyle";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/usersReducer/usersReducer";
import { IState, IUsers } from "../../redux/usersReducer/usersReducerTypes";


const Dashboard: FC = () => {
    const classes = styles()
    const navigate = useNavigate()
    const [filterEmail, setFilterEmail] = useState<string>("")
    const [filterId, setFilterId] = useState<string>("")

    useEffect(() => {
        if (!localStorage.getItem("access_token")){
            navigate("/")
        }
        dispatch(fetchData())
        localStorage.removeItem("selected_user_id")
    }, [])

    const dispatch: any = useDispatch()

    const usersList = useSelector((state: IState) => {
        return state.usersReducer.users[0]
    })

    function selectUser(userId: string){
        localStorage.setItem("selected_user_id", userId)
        navigate(`/user/${localStorage.getItem("selected_user_id")}`)
    }

    function row(user: IUsers){
         return <TableRow key={user._id} className={classes.bodyRow} onClick={() => selectUser(user._id)}>
         <TableCell align="center">{user.name}</TableCell>
         <TableCell align="center">{user.email}</TableCell>
         <TableCell align="center">{user._id}</TableCell>
        </TableRow>
    }
    
    return (
        <Box className={classes.dashboardWrapper}>
            <Header />
            <Box className={classes.listWrapper}>
                <Box className={classes.title}>Users List</Box>
                <TextField  
                    className={classes.filterUserByEmail}
                    label="Filter User By Email"
                    type="text"
                    margin="dense"
                    value={filterEmail}
                    onChange={(e) => setFilterEmail(e.target.value)}
                    />
                <TextField  
                    className={classes.filterUserByEmail}
                    label="Filter User By Id"
                    type="text"
                    margin="dense"
                    value={filterId}
                    onChange={(e) => setFilterId(e.target.value)}
                    />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table" className={classes.table}>
                        <TableHead>
                            <TableRow className={classes.headRow}>
                                <TableCell align="center" className={classes.cell}>Name</TableCell>
                                <TableCell align="center" className={classes.cell}>Email</TableCell>
                                <TableCell align="center" className={classes.cell}>ID</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {!filterEmail && !filterId && usersList?.map((user: IUsers) => (
                                row(user)))}
                            {filterEmail && !filterId && usersList?.filter((user) => {
                                return user.email.includes(filterEmail)
                            }).map((user: IUsers) => (
                                row(user)
                            ))}
                            {filterId && !filterEmail && usersList?.filter((user) => {
                                return user._id.includes(filterId)
                            }).map((user: IUsers) => (

                                row(user)
                            ))}
                            {filterId && filterEmail && usersList?.filter((user) => {
                                return user._id.includes(filterId) && user.email.includes(filterEmail)
                            }).map((user: IUsers) => (
                                row(user)
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}

export default Dashboard