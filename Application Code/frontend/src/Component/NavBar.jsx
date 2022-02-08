import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import MyButton from "./MyButton";

const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#FFFFFF',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    }
})

const NavBar = () => {
    const classes = useStyle();
    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <NavLink className={classes.tabs} to="./" exact style={{ marginRight: 450 }}><MyButton>Forum2k Devathon</MyButton></NavLink>

                <NavLink className={classes.tabs} to="all" exact>
                    <MyButton>EVENTS</MyButton>
                </NavLink>
                <NavLink className={classes.tabs} to="add" exact>
                    <MyButton>ADD EVENTS</MyButton>
                </NavLink>
                <NavLink className={classes.tabs} to="contact" exact>
                    <MyButton>CONTACT</MyButton>
                </NavLink>
                <NavLink className={classes.tabs} to="glimpse" exact>
                    <MyButton>GLIMPSE</MyButton>
                </NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;