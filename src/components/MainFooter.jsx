import footerBg from '../assets/footer-bg.jpg';
import footerLogo from '../assets/dc-logo-bg.png'

function MainFooter() {


  return (

    <>
      <div className="container-footer">
        <div className='columns'>
          <div className='column-footer'>
            <ul className='list-footer'>
              <li className='el-footer, footer-titles'>DC COMICS</li>
              <li className='el-footer'>Characters</li>
              <li className='el-footer'>Comics</li>
              <li className='el-footer'>Movies</li>
              <li className='el-footer'>TV</li>
              <li className='el-footer'>Games</li>
              <li className='el-footer'>Videos</li>
              <li className='el-footer'>News</li>
            </ul>
            <ul>
              <li className='el-footer, footer-titles'>SHOP</li>
              <li className='el-footer'>Shop DC</li>
              <li className='el-footer'>Shop DC Collectibles</li>
            </ul>
          </div>

          <div className='column-footer'>
            <ul className='list-footer'>
              <li className='el-footer, footer-titles'>DC</li>
              <li className='el-footer'>Terms Of Use</li>
              <li className='el-footer'>Privacy Policy (New)</li>
              <li className='el-footer'>Ad Choices</li>
              <li className='el-footer'>Advertising</li>
              <li className='el-footer'>Jobs</li>
              <li className='el-footer'>Subscriptions</li>
              <li className='el-footer'>Talent Workshops</li>
              <li className='el-footer'>CPSC Certificates</li>
              <li className='el-footer'>Ratings</li>
              <li className='el-footer'>Shop Help</li>
              <li className='el-footer'>Contact Us</li>
            </ul>
          </div>

          <div className='column-footer'>
            <ul className='list-footer'>
              <li className='el-footer, footer-titles'>SITES</li>
              <li className='el-footer'>DC</li>
              <li className='el-footer'>MAD Magazine</li>
              <li className='el-footer'>DC Kids</li>
              <li className='el-footer'>DC Universe</li>
              <li className='el-footer'>DC Power Visa</li>
            </ul>
          </div>

        </div>

        <figure className='footer-logo'>
          <img src={footerLogo} alt="" />
        </figure>
      </div>


      <div className='sub-footer'>
        <button className='sign-button'>
        premimi
        </button>
        <div className='cta-icons'>
        <div className='column-subFooter'>
            <ul className='list-Subfooter'>
              <li className='el-footer, footer-titles'>SITES</li>
              <li className='el-footer'>DC</li>
              <li className='el-footer'>MAD Magazine</li>
              <li className='el-footer'>DC Kids</li>
              <li className='el-footer'>DC Universe</li>
              <li className='el-footer'>DC Power Visa</li>
            </ul>
          </div>
        </div>
      </div>


    </>

  )

}

export default MainFooter
