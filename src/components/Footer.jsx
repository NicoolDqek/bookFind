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
            <div className="col-lg-3 col-md-3 col-sm-12 brand">
                <h2>BooksFinder</h2>
                <p>BooksFind is a collaborative space where readers explore, share, and discover knowledge about books, authors, and literary genres from around the world. </p>
                <ul className='redes'>
                    <i className="bi bi-github"></i>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-whatsapp"></i>
                    <i className="bi bi-envelope-at-fill"></i>
                </ul>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-6">
                <ul>
                    <li><b>About</b></li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                    
                </ul>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-6">
                <ul>
                    <li><b>Help</b></li>
                    <li>FAQ</li>
                    <li>Service Client</li>
                    <li>Others</li>
                    
                </ul>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-6">
                <ul>
                    <li><b>Policies</b></li>
               <li>Privacy Policy</li>
                < li>Terms of Use</li>
                  <li>Cookie Policy</li>
                  <li>Content Guidelines</li>
                </ul>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-6">
                   <ul>
  <li><b>Contact</b></li>
  <li>Email: <b>support@booksfind.org</b></li>
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
