import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
           <section className='footer d-flex justify-content-evenly'>
           <div >
                <p>Services</p>
                <p><small>Student Visa</small></p>
                <p><small>Visitor Visa</small></p>
                <p><small>Work-Permit Visa</small></p>
            </div>
            <div>
                <p><i className="fa-solid fa-phone"></i>+01356578493</p>
                <p><i className="fa-solid fa-envelope"></i>Shtabdee30@gmail.com</p>
                <p><i className="fa-solid fa-address-card"></i>Mirpur10,Dhaka</p>
            </div>
            <div>
            <a className='m-2' href="https://www.linkedin.com/in/shtabdee-paul-1a2604195/"><i  className="fa-brands fa-linkedin w-25 "></i></a>
            <a href="https://www.facebook.com/shtabdee.paul/"><i className="fa-brands fa-facebook-square"></i></a>
            </div>
           </section>
           <section>
            <p className='text-center'><i className="fa-solid fa-copyright"></i> {year}, Edulab visa Consultancy Center. All rights reserved.</p>
      </section>
 
        </footer>
        
    );
};

export default Footer;