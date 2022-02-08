/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import { Box, makeStyles } from '@material-ui/core';
import Planet from "./Planet";
import "./MyButton.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-responsive-carousel';

const useStyles = makeStyles({
    component: {
        margin: 0,
        fontfamily: 'Montserrat',
        '& > *': {
            marginTop: 0
        }
    },
    image: {
        width: '60%',
        marginLeft: '40%',
        height: '10%'
    },
    footerStyle: {
        textAlign: 'center',
        fontFamily: "Montserrat",
        fontSize: "2rem",
        backgroundColor: "#111111",
        color: "#fff",
        paddingTop: "20px",
        width: '100%'
    },
    githubIcon: {
        color: "#fff"
    },
    instaIcon: {
        color: "#E60965"
    }
})

const LandingPage = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Planet></Planet>

            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}
            >
                <div>
                    <img src="https://blog.hubspot.com/hubfs/Customer-testimonial-page.jpg" />
                    <div className="myCarousel">
                        <h3>Shirley Fultz</h3>
                        <h4>Designer</h4>
                        <p>
                            It's freeing to be able to catch up on customized news and not be
                            distracted by a social media element on the same site
                        </p>
                    </div>
                </div>
                <div>
                    <img src="https://media.istockphoto.com/photos/girl-learning-on-line-with-a-tablet-and-headphones-picture-id647280846?k=20&m=647280846&s=612x612&w=0&h=i1wTLnMiOM1DqNFhTL6nnQnczFCsAza52x5YXWo4uLk=" />
                    <div className="myCarousel">
                        <h3>Daniel Keystone</h3>
                        <h4>Designer</h4>
                        <p>
                            The simple and intuitive design makes it easy for me use. I highly
                            recommend Fetch to my peers.
                        </p>
                    </div>
                </div>
                <div>
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1203373205.jpg" />
                    <div className="myCarousel">
                        <h3>Theo Sorel</h3>
                        <h4>Designer</h4>
                        <p>
                            I enjoy catching up with Fetch on my laptop, or on my phone when
                            I'm on the go!
                        </p>
                    </div>
                </div>
            </Carousel>

            <div className={classes.footerStyle} >
                <h4 style={{ color: "#03e9f4" }}>Meet the Devs:</h4>
                <div className="row">
                    <div className="col-lg-6">
                        <h5>Aditya Prasad Mishra</h5>
                        <a className={classes.githubIcon} href="https://github.com/adimishrax7x"  ><i className={classes.iconStyle} class="fab fa-github-square"></i></a>
                        <span>  </span>
                        <a href="https://www.linkedin.com/in/aditya-prasad-mishra-9555571a5/"  ><i className={classes.iconStyle} class="fab fa-linkedin"></i></a>
                        <span>  </span>
                        <a className={classes.instaIcon} href="https://www.instagram.com/thatmishraji/"  ><i className={classes.iconStyle} class="fab fa-instagram-square"></i></a>
                    </div>
                    <div className="col-lg-6">
                        <h5>Souvik Nayak</h5>
                        <a className={classes.githubIcon} href="https://github.com/Souvik-Nayak"  ><i className={classes.iconStyle} class="fab fa-github-square"></i></a>
                        <span>  </span>
                        <a href="https://www.linkedin.com/in/souvik-nayak-2a9497217/"  ><i className={classes.iconStyle} class="fab fa-linkedin"></i></a>
                        <span>  </span>
                        <a className={classes.instaIcon} href="https://www.instagram.com/_travel_nomad/"  ><i className={classes.iconStyle} class="fab fa-instagram-square"></i></a>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default LandingPage;