import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <div className='footer'>
            <small>HEXA @2022</small>

            <img src="https://hexacit.com/images/logo-white.png" alt="company-logo" />
            

            <div className="social-media">
                <a href="s"><FacebookIcon sx={{fontSize:16}}/></a>
                <a href="sd"><TwitterIcon sx={{fontSize:16}}/></a>
                <a href="WW"><InstagramIcon sx={{fontSize:16}}/></a>
                <a href="asd"><LinkedInIcon sx={{fontSize:16}}/></a>
            </div>


        </div>
    )
}

export default Footer;