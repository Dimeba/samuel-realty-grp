import styles from "./Footer.module.scss";
import { FaInstagram, FaFacebook } from "react-icons/fa";

// Small reusable component for images
const FooterImage = ({ src, width, height, alt, className }) => (
  <img
    className={className}
    src={src}
    width={width}
    height={height}
    alt={alt}
  />
);

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Footer | left bottom side */}
        <div className={styles.leftFooter}>
          <a href="https://www.facebook.com/samuelrealtygroup/" target="_blank">
            <FaFacebook className={styles.faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/samuelrealtygroup/"
            target="_blank"
          >
            <FaInstagram className={styles.faInstagram} />{" "}
          </a>
          <a
            href="https://www.zillow.com/profile/shorowitzrealty"
            target="_blank"
          >
            <FooterImage
              src="./images/zillow-logo.png"
              className={styles.zillowLogo}
              width={85}
              height={18}
              alt="Zillow Logo"
            />
          </a>{" "}
        </div>

        {/* Footer | Middle bottom side */}
        <div className={styles.middleFooter}>
          <div className={styles.firstFooterRow}>
            <FooterImage
              src="./images/rebny-logo.png"
              width={50}
              height={18}
              alt="REBNY Logo"
            />
            <FooterImage
              src="./images/realtor-logo.png"
              width={15}
              height={18}
              alt="Realtor Logo"
            />
            <FooterImage
              src="./images/equal-housing-logo.png"
              width={18}
              height={18}
              alt="Equal Housing Logo"
            />
            <FooterImage
              src="./images/long-island-logo.png"
              width={80}
              height={18}
              alt="Long Island Logo"
            />
          </div>
          <p className={styles.secondFooterRow}>
            Legal Disclaimer | Designed and developed by DeSophy
          </p>
          <p className={styles.thirdFooterRow}>
            New York State Fair Housing Notice | NYS Standard Operating
            Procedure | NYS Tenants' Rights to Reasonable Accommodations For
            Persons With Disabilities
          </p>
        </div>

        {/* Footer | Right bottom side */}
        <div className={styles.rightFooter}>
          <div className={styles.introduction}>
            Samuel Realty Group, LLC
            <br />
            750 Lexington Avenue
            <br />
            6th Floor, Suite 141
            <br />
            New York, NY 10022
          </div>
          <FooterImage
            src="/images/logo.jpg"
            width={90}
            height={70}
            alt="Company Logo"
            className={styles.footerLogo}
          />{" "}
          {/* I have added this logo image just for perception */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
