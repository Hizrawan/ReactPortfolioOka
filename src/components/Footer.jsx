import IconEmail from "../assets/images/socials/envelope.svg"
import IconDev from "../assets/images/socials/devdotto.svg"
import IconGit from "../assets/images/socials/github.svg"
import IconIg from "../assets/images/socials/instagram.svg"
import IconLinkedin from "../assets/images/socials/linkedin.svg"
import IconTwitter from "../assets/images/socials/twitter.svg"
import IconYoutube from "../assets/images/socials/youtube.svg"

const Footer = () => {
    return (
        <div className="centered-container" >
            <div className="bodysocial">

                <a href="mailto:Hizrawandwioka@gmail.com">
                    <img src={IconEmail} alt="email" class="social-icon" />
                </a>
                <a href="https://dev.to/hizrawandwioka" target="_blank" rel="noopener noreferrer">
                    <img src={IconDev} alt="Dev.to" class="social-icon" />
                </a>
                <a href="https://github.com/hizrawan" target="_blank" rel="noopener noreferrer">
                    <img src={IconGit} alt="GitHub" class="social-icon" />
                </a>
                <a href="https://instagram.com/hizrawando" target="_blank" rel="noopener noreferrer">
                    <img src={IconIg} alt="Instagram" class="social-icon" />
                </a>
                <a href="https://linkedin.com/in/hizrawan" target="_blank" rel="noopener noreferrer">
                    <img src={IconLinkedin} alt="LinkedIn" class="social-icon" />
                </a>
                <a href="https://twitter.com/hizrawan" target="_blank" rel="noopener noreferrer">
                    <img src={IconTwitter} alt="Twitter" class="social-icon" />
                </a>
                <a href="https://youtube.com/@hizrawandwioka1979" target="_blank" rel="noopener noreferrer">
                    <img src={IconYoutube} alt="YouTube" class="social-icon" />
                </a>

            </div>

        </div>
    )
}

export default Footer