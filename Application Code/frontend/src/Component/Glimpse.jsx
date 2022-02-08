/* eslint-disable no-sequences */
/* eslint-disable jsx-a11y/alt-text */
import { Box, makeStyles } from '@material-ui/core';
import Vector1 from '../Assets/Images/pic1.jpg';
import Vector2 from '../Assets/Images/pic2.jpeg';
import Vector3 from '../Assets/Images/pic3.jpg';
import Vector4 from '../Assets/Images/pic4.jpg';
import Vector5 from '../Assets/Images/pic5.jpg';

const useStyles = makeStyles({
    component: {
        padding: '20px'
    },
    image: {
        width: '50%',
        height: '100%',
        border: "4px solid #fff"
    }
})

const Glimpse = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>

            <Box style={{ display: 'block' }, { width: 'null' }, { resizeMode: 'contain' }, { height: 400 }}>
                <img src={Vector1} className={classes.image} />
                <img src={Vector2} className={classes.image} />
            </Box>

            <Box style={{ display: 'block' }, { width: 'null' }, { resizeMode: 'contain' }, { height: 400 }}>
                <img src={Vector3} className={classes.image} />
                <img src={Vector4} className={classes.image} />
            </Box>

            <Box style={{ display: 'block' }, { width: 'null' }, { resizeMode: 'contain' }, { height: 400 }}>
                <img src={Vector5} className={classes.image} />
                <img src={Vector1} className={classes.image} />
            </Box>
        </Box>
    )
}

export default Glimpse;