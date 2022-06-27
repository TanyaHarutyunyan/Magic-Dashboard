import { Box, Button, TextField, Typography } from "@mui/material"
import { ChangeEvent, useState, FC} from "react"
import { IRequestOptions, ITextField } from "./updateUserTypes";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../redux/usersReducer/usersReducerTypes";
import { styles } from "./updateUserStyle";
import { fetchData } from "../../redux/usersReducer/usersReducer";

const UpdateUserModal: FC = () => {
    const [updateFields, setUpdateFields] = useState<any>({})

    const isOpen = useSelector((state:IState) => {
        return state.updateModalReducer.isOpen
    })

    const dispatch: any = useDispatch()

    function updateUserName (e: ChangeEvent<HTMLInputElement>){
        if (e.target.value.length > 0){
            setUpdateFields({
                ...updateFields, 
                name: e.target.value
            })
        }else {
            delete updateFields.name
        }
    }

    function updateUserPhone (e: ChangeEvent<HTMLInputElement>){
        if (e.target.value.length > 0){
            setUpdateFields({
                ...updateFields, 
                phone: e.target.value
            })
        }else {
            delete updateFields.phone
        }
    }

    function updateUserMaster (e: ChangeEvent<HTMLInputElement>){
        if (e.target.value.length > 0){
            setUpdateFields({
                ...updateFields, 
                master: e.target.value
            })
        }else {
            delete updateFields.master
        }
    }

    function updateUserAffiliate (e: ChangeEvent<HTMLInputElement>){
        if (e.target.value.length > 0){
            setUpdateFields({
                ...updateFields, 
                affiliate: e.target.value
            })
        }else {
            delete updateFields.affiliate
        }
    }

    function updateUserReferrerCount (e: ChangeEvent<HTMLInputElement>){
        if (e.target.value.length > 0){
            setUpdateFields({
                ...updateFields, 
                referrerCount: e.target.value
            })
        }else {
            delete updateFields.referrerCount
        }
    }

    function updateUserReferrer (e: ChangeEvent<HTMLInputElement>){
        if (e.target.value.length > 0){
            setUpdateFields({
                ...updateFields, 
                referrer: e.target.value
            })
        }else {
            delete updateFields.referrer
        }
    }
   
    function enterUpdates(){
        dispatch({
            type: "setFalse",
            payload: false
        })
        if (Object.keys(updateFields).length !== 0){
            const bearerToken = localStorage.getItem("access_token")
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Accept", "application/json");
            myHeaders.append("Origin", `${process.env.REACT_APP_BASEURL}/`);
            myHeaders.append("Referer", `${process.env.REACT_APP_BASEURL}/`);
            myHeaders.append("Authorization", `Bearer ${bearerToken}`);

            let raw = JSON.stringify(updateFields);

            let requestOptions: IRequestOptions = {
              method: 'PUT',
              headers: myHeaders,
              body: raw,
            };

            fetch(`${process.env.REACT_APP_BASEURL}/v1/users/update/62b5082b445d0018412a2ca8`, requestOptions)
              .then(response => response.json())
              .then(result => dispatch(fetchData()))
              .catch(error => console.log('error', error));
        }
    }

    function cancelUpdate(){
        dispatch({
            type: "setFalse",
            payload: false
        })
    }


    const textFields: ITextField[] = [
        {
            label: "Name",
            type: "text",
            change: updateUserName,
            prop: "name"
        },
        {
            label: "Phone",
            type: "number",
            change: updateUserPhone ,
            prop: "phone"

        },
        {
            label: "Master",
            type: "text",
            change: updateUserMaster,
            prop: "master"

        },
        {
            label: "Affiliate",
            type: "text",
            change: updateUserAffiliate ,
            prop: "affiliate"

        }, 
        {
            label: "ReferrerCount",
            type: "number",
            change: updateUserReferrerCount,
            prop: "referrerCount"

        },
        {
            label: "Referrer",
            type: "number",
            change: updateUserReferrer,
            prop: "referrer"

        }
    ]

    const classes = styles()

    return (
        <Box className={classes.updateUserModal} style={{display: isOpen ? "flex" : "none"}}>
            <Typography variant="h4" className={classes.title}>UPDATE USER DATA</Typography>
            {textFields.map((textField: any) => {
                return <TextField
                key={textField.label}
                label={textField.label}
                type={textField.text}
                margin="dense"
                onChange={textField.change} 
                />
            })}
            <Button variant="contained" size="large" onClick={enterUpdates}>Enter Updates</Button>
            <Button variant="contained" size="large" onClick={cancelUpdate}>Cancel</Button>
        </Box>
    )
}

export default UpdateUserModal