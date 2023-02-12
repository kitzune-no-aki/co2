import React from "react";
import "./footer.css";
import Mail from '../../icons/icons8-neuer-beitrag-50.png';
import Insta from '../../icons/icons8-instagram-50.png';
import Twitter from '../../icons/icons8-twitter-50.png';
import Print from '../../icons/icons8-pinterest-50.png';


const Footer = () => {
    return (
        <div className='foot'>
            <div className='verweise'>
                <div className='Kontakt'>
                    <div>
                        <p>
                            Kontakt
                        </p>
                        <a href='mailto:kontakt@mpech.dev'>
                            <img alt='Mailsymbol' src={Mail}/>
                        </a>
                    </div>
                </div>
                <div className='Rechtliches'>
                    <p>
                        Impressum
                    </p>
                    <p>
                        Datenschutzerklärung
                    </p>
                    <p>
                        Rechtliche Hinweise
                    </p>
                </div>
                <div className='socialMedia'>
                    <p>Folgen uns auf</p>
                    <div className='socialMediaIcons'>
                        <a href='https://www.instagram.com/explore/tags/co2/' target='_blank' rel='noreferrer'>
                            <img alt='instagram icon' src={Insta}/>
                        </a>
                        <a href='https://twitter.com/search?q=co2&src=typed_query' target='_blank' rel='noreferrer'>
                            <img alt='Twitter icon' src={Twitter}/>
                        </a>
                        <a href='https://www.pinterest.at/search/pins/?q=co2&rs=typed' target='_blank' rel='noreferrer'>
                            <img alt='printerest icon' src={Print}/>
                        </a>
                    </div>
                </div>
                <div className='iconsFrom'>icons from: <a href='https://icons8.com/' target="_blank" rel='noreferrer'>https://icons8.com/</a></div>
            </div>
        </div>
    )
}

export default Footer;