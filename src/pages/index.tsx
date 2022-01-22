import Navbar from '../components/layout/navbar'
import Footer from '../components/layout/footer'
import PropTypes from 'prop-types';
import Icones from '../components/icons'

export default function Home() {
  const socialLinks = Icones  
  const footer = {socialLinks}
  const footerMenus = {}
  console.log(footer)
  return (
    <div >
      <Navbar></Navbar>
        <Footer footer={footer} footerMenus={footerMenus} />
      </div>
    // </div>
  )
}
