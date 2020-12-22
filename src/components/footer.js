/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer 
    className="site-footer"
    sx={{
      bg: 'primary'
    }}
  >
    <div className="container">
      <p>Developed using Gatsby with the Foundation theme. Content Copyright © 2020 by <Link to="/">Rock of Pages</Link></p>
    </div>
  </footer>
)

export default Footer
