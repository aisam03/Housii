import React from 'react'
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineGooglePlus } from "react-icons/ai";

const Footeer = () => {
  return (
    <div className='footer'>
      <div className='container f-contain'>
        <div className='row foot-items'>
          <div className="col-2 resource">
            <span>Resources</span>
            <ul>
              <li>Design Guide</li>
              <li>API Documentation</li>
              <li>Privacy & Policy</li>
              <li>License</li>
              <li>Careers</li>
              <li>Organization</li>
            </ul>
          </div>
          <div className="col-2 service">
            <span>Services</span>
            <ul>
              <li>Product</li>
              <li>Pricing</li>
              <li>Help & Support</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="col-2 support">
            <span>Support</span>
            <ul>
              <li>Terms and Condition</li>
              <li>Customer Care</li>
              <li>Privacy & Policy</li>
              <li>Refund</li>
            </ul>
          </div>
          <div className="col-2 host">
            <span>Host</span>
            <ul>
              <li>Start host your place</li>
              <li>Community</li>
              <li>Privacy & Policy</li>
              <li>License</li>
            </ul>
          </div>
          <div className="col-4 hous">
            <img className='h-logo' src="Assets/logo.png" alt="" />
            <span>Housii</span>
            <p className='p1'>The movement of people between distant geographical locations</p>
            <p className='p2'>70 Washington Square South, New York, NY 10012. <br />United States</p>
            <p className='p3'>+1987 654 3211 support@domain.com</p>
            <span className='icons'>
              <a href="" className='twitter'><BsTwitter /></a>
              <a href="" className="facebook"><FaFacebookF /></a>
              <a href="" className="youtube"><BsYoutube /></a>
              <a href="" className='google'><AiOutlineGooglePlus /></a>
            </span>
          </div>
        </div>
      </div>
      <div>
        <p className='f-end'>© 2021 company. All Rights Reserved - Designed by Joyn</p>
        </div>
    </div>
  )
}

export default Footeer
