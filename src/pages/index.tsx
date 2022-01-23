import Navbar from '../components/layout/navbar'
import Footer from '../components/layout/footer'
import {socialLinks} from '../utils/LoadLinks'


export default function Home() {
  
 /* const iconUrl = {iconUrl:"/teste"}
  const iconName = {iconName:"Instagram"}
  const copyrightText = {copyrightText:"teste2"}
  const socialLinks = [iconName,iconUrl]
  */

  const footer = {socialLinks}
  const footerMenus = {}

  console.log(footer)
  //console.log(footer)
  return (
    <div >
      <Navbar></Navbar>
        <Footer footer={footer} footerMenus={footerMenus} />
    </div>
    // </div>
  )
}
