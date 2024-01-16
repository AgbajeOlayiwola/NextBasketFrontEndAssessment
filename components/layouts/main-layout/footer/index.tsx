"use client"
import FacebookWhiteIconSvg from "@/components/SVG/facebookWhiteIconSvg"
import InstagramWhiteIconSvg from "@/components/SVG/instagramWhiteIconSvg"
import TwitterWhiteIconSvg from "@/components/SVG/twitterWhiteIconSvg"
import SecondaryCover from "@/components/cover/secondary-cover"
import { Button, TextField, styled } from "@material-ui/core"
import styles from "./styles.module.css"
const Footer = () => {
  const handleClick = () => {
    // Add your button click logic here
    console.log("Button clicked!")
  }
  const StyledButton = styled(Button)({
    display: "flex",
    padding: "15px 22px",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    color: " #fff",
    textAlign: "center",
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "22px",
    letterSpacing: "0.2px",
    borderRadius: " 0px 5px 5px 0px",
    border: " 1px solid #E6E6E6",
    background: "#23A6F0",
  })
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#A0AAB4",
    },
    "& .MuiInput-underline:before": {
      border: "none",
      content: "none",
    },
    "& .MuiInput-underline:after": {
      border: "none",
      content: "none",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "none",
        borderRadius: 5,
      },
      "&:hover fieldset": {
        borderColor: "none",
      },
      "&.Mui-focused fieldset": {
        borderColor: "none",
      },
    },
    "& .MuiInputLabel-root": {
      // Add padding to affect the label
      paddingLeft: 20,
    },
    // Additional styles
    borderRadius: 5,
    border: "1px solid #E6E6E6",
    background: "#F9F9F9",
    display: "flex",
    padding: "0px 20px 0px 20px",
    alignItems: "center",
  })
  return (
    <div className={styles.footer}>
      <div className={styles.footer_with_bg}>
        <SecondaryCover>
          <div className={styles.footer_details}>
            <h1>Bandage</h1>
            <div className={styles.socials}>
              <FacebookWhiteIconSvg fill="#23A6F0" width={24} height={24} />
              <InstagramWhiteIconSvg fill="#23A6F0" width={24} height={24} />
              <TwitterWhiteIconSvg fill="#23A6F0" width={24} height={24} />
            </div>
          </div>
        </SecondaryCover>
      </div>
      <SecondaryCover>
        <div className={styles.second_footer}>
          <div className={styles.second_footer_div}>
            <h5>Company Info</h5>
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
          <div className={styles.second_footer_div}>
            <h5>Legal</h5>
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
          <div className={styles.second_footer_div}>
            <h5>Features</h5>
            <p>Business Marketing</p>
            <p>User Analytic</p>
            <p>Live Chat</p>
            <p>Unlimited Support</p>
          </div>
          <div className={styles.second_footer_div}>
            <h5>Resources</h5>
            <p>IOS & Android</p>
            <p>Watch a Demo</p>
            <p>Customers</p>
            <p>API</p>
          </div>
          <div className={styles.subscribe_section}>
            <h5>Get In Touch</h5>
            <div className={styles.subscribe}>
              <CssTextField label="Your Email" id="custom-css-outlined-input" />
              <StyledButton variant="outlined" onClick={handleClick}>
                Subscribe
              </StyledButton>
            </div>
            <p className={styles.subscribe_section_p}>
              Lore imp sum dolor Amit
            </p>
          </div>
        </div>
      </SecondaryCover>
      <div className={styles.bottom_footer_bg}>
        <SecondaryCover>
          <div className={styles.bottom_footer_cont}>
            <p>Made With Love By Finland All Right Reserved </p>
          </div>
        </SecondaryCover>
      </div>
    </div>
  )
}

export default Footer
