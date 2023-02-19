import React, {useState} from "react";
import "./footer.css";
import Mail from '../../icons/icons8-neuer-beitrag-50.png';
import Insta from '../../icons/icons8-instagram-50.png';
import Twitter from '../../icons/icons8-twitter-50.png';
import Print from '../../icons/icons8-pinterest-50.png';


const Footer = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='foot'>
            <div className='verweise'>
                <div className='Kontakt'>
                    <details>
                        <summary>
                            Kontakt
                        </summary>
                        <p>
                            Name
                        </p>
                    </details>
                    <a href='mailto:kontakt@mpech.dev'>
                            <img alt='Mailsymbol' src={Mail}/>
                    </a>
                </div>
                <div className='Rechtliches'>
                    <div className='impressum'>
                        <div>
                            Impressum
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div className='datenschutz'>
                        <div>
                            Datenschutz
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                    </div>
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