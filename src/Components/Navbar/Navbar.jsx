import './Navbar.css';
import logo from '../../Images/CaverHexa-removebg-preview.png'
import MenuIcon from '@mui/icons-material/Menu';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Navbar = () => {

    

    window.addEventListener('scroll', function () {
        let myNav = document.getElementById('navbar');
        if (window.pageYOffset > 0) {
            myNav.classList.add('scroll-nav')
        } else {
            myNav.classList.remove('scroll-nav')
        }
    })


    function Show () {
        let show = document.getElementById('show')
        show.style.display='block';
        document.body.style.overflow = "hidden";
    }

    function Hide () {
        let Hide = document.getElementById('show')
        Hide.style.display= 'none';
        document.body.style.overflow = "visible"
    }


    return (
        <>
            <div className="navbar" id='navbar'>
                
                <img src={logo} alt="HEXA-LOGO" />
                <ul className='linkes' >
                    <li><a href='/'>الرئيسية</a></li>
                    <li><a href='/about'>من نحن</a></li>
                    <li><a href='/services'>خدماتنا</a></li>
                    <li><a href='/works'>أعمالنا</a></li>
                    <li><a href='/team'>فريقنا</a></li>
                    <li><a href='/blog'>المدونة</a></li>
                    <li><a href='/contact'>تواصل معنا</a></li>
                    <li><a href='/english'>ENGLISH</a></li>
                </ul>
                <ul className='menu-icon'>
                    <li><button id='Menu' onClick={Show} href="ww"><MenuIcon sx={{fontSize:22}}/></button></li>
                </ul>
            </div>

            <div id='show' className="mobile-nav">
                <div className="main-menu">
                    <img src="https://hexacit.com/images/logo-white.png" alt="HEXA" srcset="" />
                    <ul>
                        <li><a href='//'>الرئيسية</a></li>
                        <li><a href='/about'>من نحن</a></li>
                        <li><a href='/services'>خدماتنا</a></li>
                        <li><a href='/works'>أعمالنا</a></li>
                        <li><a href='/team'>فريقنا</a></li>
                        <li><a href='/blog'>المدونة</a></li>
                        <li><a href='/contact'>تواصل معنا</a></li>
                        <li><a href='/english'>English</a></li>
                    </ul>
                </div>

                <button onClick={Hide} id='hide' className="close-mobile-nav"></button>
            </div>

            <div className="sideEffect"></div>

            <a href='/ww' className="whatsapp-icon"><WhatsAppIcon/></a>

        </>
    )
}

export default Navbar