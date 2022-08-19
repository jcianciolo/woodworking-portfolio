import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className="footer">
        <div className="socials">
            <p><InstagramIcon /></p>
            <p><EmailIcon /></p>
        </div>
    <p>© 2022 Alex Kochman, John Cianciolo</p>
    </div>
  )
}

export default Footer