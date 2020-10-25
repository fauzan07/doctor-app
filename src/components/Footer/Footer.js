import React from 'react';


function Footer(props) {

  var date = new Date().getFullYear();
 

  return(
    
    <>
    <footer>
        <section  className="footer-area py-2">
            <div className="container">
                <div className="row">
                    <div className="w-100"></div>
                    <div className="col-md-12 pt-4">
                       <p className="text-muted">&copy; {date} - All Rights Reserved - WebTech<br/><small><a href="https://my-portfolio-f.herokuapp.com/" className="text-muted" target="_blank" rel="noopener noreferrer">Website Designed by Er.fauzan</a></small></p>
                    </div>
                </div>
            </div>
          </section>
    </footer>
    </>
  
  );

}

export default Footer;
