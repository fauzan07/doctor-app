import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import about from '../../assets/about-me.jpg';



function Home(props) {

  const [thankuMessage, SetThankuMessage] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_g4r1bhr', e.target, 'user_VebdjDhh02E93W447i6mi')
      .then((result) => {
          console.log(result.text);
            SetThankuMessage(true);
              setTimeout(() => {
                SetThankuMessage(false);
              }, 3000);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  

  return(
    <>
  
      <section className="banner-section mb-5" id="home">
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <h1 className="banner-title">We Care for Your Health Every Moment</h1>
            <h3 className="text-center py-2">The best of modern healthcare to ensure you stay healthy, always.</h3>
            <div className="text-center"><a className="btn mainbtn" href="#appointment">Make Appointment</a></div>
          </div>
          </div>            
        </div>
      </section>


   
      <section className="about pt-2 pb-5" id="about">
      <div className="container">
        <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="about-text">
              <h2>A Few Words About Me</h2>
              <p className="text-secondary pt-4">My name is Dr. Rukmaji Prakash, I am a Neurosurgeon  and has an experience of 10 years in this field. I Had completed MBBS from Maharashtra University of Health Sciences, Nashik in 2009, MS - General Surgery from Dr. B.R. Ambedkar Open University, Hyderabad in 2013 and MCh - Neuro Surgery from Sri Venkateshwara Institute of Medical Sciences in 2019.
              <br/>Some of the services provided by the me are: Trigeminal Neuralgia, Brain & Spine Tumors, Cervical & Lumbar Disc Surgeries, Head Injury and Epilepsy surgery etc.</p>
              <a href="#contact" className="btn mainbtn mt-4">Contact Now</a>
              </div>
            </div>
            <div className="col-lg-6  offset-lg-1 col-md-12">
              <img src={about} className="img-fluid" alt="about-img"/>
            </div>
        </div>
      </div>
      </section>


      <section className="services bg-light py-5" id="services">
      <div className="container">
          <div className="section-header text-center pb-4">
              <h2 className="head-title">My Offered Services</h2>
              <p>We Make HealthCare Better Together</p>
          </div>
          <div className="client-data py-2">
              <div className="row">
                  <div className="col-md-12 col-lg-4">
                      <div className="services-item" data-aos="fade-up" data-aos-duration="3000">
                          <div className="icon1 text-center">
                              <i className="fa fa-plus-circle" aria-hidden="true"></i>
                          </div>
                          <h3 className="text-center">Health Checkup</h3>
                          <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a erat sit amet augue aliquet rutrum.</p>
                      </div>
                  </div>
                  <div className="col-md-12 col-lg-4">
                      <div className="services-item" data-aos="fade-up" data-aos-duration="3000">
                          <div className="icon1 text-center">
                          <i className="fa fa-heartbeat" aria-hidden="true"></i>
                          </div>
                          <h3 className="text-center">Blood Pressure Monitor</h3>
                          <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a erat sit amet augue aliquet rutrum.</p>
                      </div>
                  </div>
                  <div className="col-md-12 col-lg-4">
                      <div className="services-item" data-aos="fade-up" data-aos-duration="3000">
                          <div className="icon1 text-center">
                              <i className="fa fa-medkit" aria-hidden="true"></i>
                          </div>
                          <h3 className="text-center">Cupping therapy</h3>
                          <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a erat sit amet augue aliquet rutrum.</p>
                      </div>
                  </div>
              </div>
          </div>
          </div>
      </section>

      <section className="contact-us py-5" id="contact">
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-4">
                  <div className="contact-text text-center">
                      <h4>Emergency hotline</h4>
                      <h1>+91 25 567 550</h1>
                      <p>We provide 24/7 customer support. Please feel free to contact us for emergency case.</p>
                  </div>
              </div>
            </div>
        </div>
      </section>
      

      <section className="Appointment-section py-5" id="appointment">
        <div className="container">
            <header className="text-center mb-5">
                <h2 className="text-uppercase lined">Make Appointment</h2>
            </header>
            <div className="row">
                <div className="col-lg-6">
                    <form onSubmit={sendEmail} className="contact-form" id="validateform">
                        <div className="row">
                            <div className="form-group col-lg-12">
                                <label htmlFor="name">patient Name *</label>
                                <input id="name" type="text" name="name" placeholder="Enter your firstname" className="form-control" required/>
                            </div>
                            <div className="form-group col-lg-6">
                                <label htmlFor="mobile">patient phone *</label>
                                <input id="mobile" type="number" name="mobile" placeholder="Enter your phone no" className="form-control" required/>
                            </div>
                            <div className="form-group col-lg-6">
                                <label htmlFor="dob">Date of Birth *</label>
                                <input id="dob" type="date" name="dob" className="form-control" required/>
                            </div>
                            <div className="form-group col-lg-6">
                                <label htmlFor="appointmentdate">Appointment Date *</label>
                                <input id="appointmentdate" type="date" name="appointmentdate" className="form-control" required/>
                            </div>
                            <div className="form-group col-lg-6">
                                <label htmlFor="disease">Disease Type *</label>
                                <select className="form-control" name="disease" id="disease" >
                                    <option defaultValue="Select Disease">Select your Disease</option>
                                    <option>Viral Fever</option>
                                    <option>Cold</option>
                                    <option>Maleria</option>
                                    <option>Dengu</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="form-group col-lg-12">
                                <label htmlFor="message">patient message for us *</label>
                                <textarea id="message" name="message" placeholder="Enter your message" rows="4" className="form-control"></textarea>
                            </div>
                            <div className="form-group col-lg-12">
                                <button type="submit" name="submit" className="btn btn-outline-primary w-100">Send Message</button>
                            </div>
                        </div>
                        {thankuMessage ? <span className="text-success text-center my-2">"Thank you for making Appointment!"</span> : null}
                    </form>
                </div>
                <div className="col-lg-6">
                    <div className="icon mb-3"><i className="fas fa-map-marker-alt"></i> Our Office</div>
                    <p>56/8, Santa bullevard, Rocky beach, San fransisco, Los angeles, USA Maharashtra</p>
                    <div className="icon mb-3"><i className="far fa-clock"></i> Servicing Hours</div>
                    <p>Mon-Sat: 10am – 6pm</p>
                    <div className="icon mb-3"><i className="fa fa-phone"></i> Get in Touch</div>
                    <p>+91 8267250401</p>
                    <p>+91 9926898850</p>
                    <div className="icon mb-3"><i className="fa fa-envelope"></i> Mail Us At</div>
                    <p> dr.rukmaji@gmail.com</p>
                    <ul className="mb-0 list-inline social text-left">
                        <li className="list-inline-item"><a href="https://wa.me/918097603225"  target="_blank" rel="noopener noreferrer" className="social-link social-link-whatsapp"><i className="fab fa-whatsapp"></i></a></li>
                        <li className="list-inline-item"><a href="#" className="social-link social-link-facebook"><i className="fab fa-facebook-f"></i></a></li>
                        <li className="list-inline-item"><a href="#" className="social-link social-link-instagram"><i className="fab fa-instagram"></i></a></li>
                        <li className="list-inline-item"><a href="#" className="social-link social-link-email"><i className="fas fa-envelope"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
      </section>
  
    </>
  );

  

}

export default Home;
