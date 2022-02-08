import React, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, makeStyles } from '@material-ui/core';
import { addUser } from '../Service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddEvents = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = async () => {
        await addUser(user);
        history.push('./all');
    }



    const submitBtn = {
        textAlign: "center",
        marginTop: "2%"
    }

    const Btn = {
        backgroundColor: "black",
        color: "#03e9f4",
        width: "50%",
        height: "3rem",
        hover: {
            backgroundColor: "#fff"
        }
    }
    const headingStyle = {
        textAlign: "center",
        fontSize: "3rem"
    };

    return (
        <FormGroup className={classes.container}>
            <h1 style={headingStyle} className="mb-4 lead">EVENT FORM</h1>
            <FormControl>
                <InputLabel htmlFor="my-input">Event Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Department</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Date Of Event & Venue</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Contact</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>

                <div style={submitBtn}>
                    <button style={Btn} type="submit" className="btn btn-primary mt-3 lead" onClick={() => addUserDetails()}>Submit</button>
                </div>

            </FormControl>
        </FormGroup>
    )
}

export default AddEvents;