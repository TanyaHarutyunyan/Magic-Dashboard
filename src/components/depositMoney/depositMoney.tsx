import { Box, Button, TextField, Typography } from "@mui/material"
import { ChangeEvent, useState, FC} from "react"
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../redux/usersReducer/usersReducerTypes";
import { styles } from "./depositMoneyStyle";
import { IRequestOptions } from "./depositMoneyTypes";

const DepositMoneyModal: FC = () => {
    
    const classes = styles()
    const [depositAmount, setDepositAmount] = useState<String>()

    const isOpen = useSelector((state:IState) => {
        return state.depositMoneyReducer.isOpen
    })
    const dispatch: any = useDispatch()

    function depositMoney (){
        dispatch({
            type: "setDepositFalse",
            payload: false
        })
        if (depositAmount){
            let myHeaders = new Headers();
            const bearerToken = localStorage.getItem("access_token")
            const selected_user_id = localStorage.getItem("selected_user_id");
            myHeaders.append("Authority", `${process.env.REACT_APP_BASEURL}/`);
            myHeaders.append("Accept", "application/json");
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Origin", `${process.env.REACT_APP_BASEURL}/`);
            myHeaders.append("Referer", `${process.env.REACT_APP_BASEURL}/`);
            myHeaders.append("Authorization", `Bearer ${bearerToken}`);
    
            let raw = JSON.stringify({"amount": Number(depositAmount),"notes":{"note":"new"},"user_id": selected_user_id});
    
            let requestOptions: IRequestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
            };
    
            fetch("https://magic-dashboard-api.herokuapp.com/api/v1/deposits/store", requestOptions)
              .then(response => response.json())
              .then(result => window.location.reload())
              .catch(error => console.log('error', error));
        }
        
    }

    function depositMoneyAmount (e: ChangeEvent<HTMLInputElement>){
        setDepositAmount(e.target.value)
    }

    function cancelDepositMoney(){
        dispatch({
            type: "setDepositFalse",
            payload: false
        })
    }


    return (
        <Box className={classes.depositMoneyModal} style={{display: isOpen ? "flex" : "none"}}>
            <Typography variant="h4" className={classes.title}>DEPOSIT MONEY</Typography>
                <TextField key={444}
                    label="Deposit Money Amount"
                    type="number"
                    margin="dense"
                    onChange={depositMoneyAmount} 
                    className={classes.depositMoneyField} />
            <Box className={classes.btnWrapper}>
                <Button variant="contained" size="large" className={classes.depositMoneyBtn} onClick={depositMoney}>Deposit Money</Button>
                <Button variant="contained" size="large" className={classes.depositMoneyBtn} onClick={cancelDepositMoney}>Cancel</Button>
            </Box>
        </Box>
    )
}

export default DepositMoneyModal