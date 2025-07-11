import React from 'react'

function Footer() {
  return (
    <div className='container-fluid footer'>
        <div className="row header-footer">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <p>Suscribe our newsletters for newest books updates</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <input type="text" placeholder='Type your e-mail'/>
                <button>Subscribe</button>
            </div>
        </div>
        <div className="row footer-foot">
            <div className="col">
                <h2>BooksFind</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid reprehenderit, vel placea </p>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="col">
                <ul>
                    <li><b>About</b></li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                    
                </ul>
            </div>
            <div className="col">
                <ul>
                    <li><b>Help</b></li>
                    <li>FAQ</li>
                    <li>Service Client</li>
                    <li>Others</li>
                    
                </ul>
            </div>
            <div className="col">
                <ul>
                    <li><b>Policies</b></li>
               <li>Privacy Policy</li>
                < li>Terms of Use</li>
                  <li>Cookie Policy</li>
                  <li>Content Guidelines</li>
                </ul>
            </div>
            <div className="col">
                   <ul>
  <li><b>Contact</b></li>
  <li>Email: support@booksfind.org</li>
  <li>Help Center</li>
  <li>Report an Issue</li>
  <li>Feedback Form</li>
</ul>

            </div>
             
        </div>
      
    </div>
  )
}

export default Footer
