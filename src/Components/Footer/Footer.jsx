import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
           <div className="container">
               <h4>Mohamed Yahia &copy; {new Date().getFullYear()} all rights reserved</h4>
           </div>
        </footer>
    )
};

export default Footer;