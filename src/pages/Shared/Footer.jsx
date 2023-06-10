import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#18191B]">
      <div className="max-w-7xl mx-auto footer px-5 md:px-2 py-10">
        <div>
          <Link href="/" className="text-white text-xl font-semibold">
            ColorPhotography
          </Link>
        </div>
        <div>
          <span className="text-sm text-white font-semibold uppercase tracking-wide">
            Need Help?
          </span>
          <a className="text-[#999] link link-hover cursor-pointer">
            Contact Us
          </a>
          <a className="text-[#999] font-normal link-hover cursor-pointer">
            Shipping Services
          </a>
          <a className="text-[#999] link link-hover">Payment Options</a>
          <a className="text-[#999] link link-hover">Return & Exchanges</a>
          <a className="text-[#999] link link-hover">FAQs</a>
        </div>
        <div>
          <span className="text-sm text-white font-semibold uppercase tracking-wide">
            The Company
          </span>
          <a className="text-[#999] link link-hover">Blog & News</a>
          <a className="text-[#999] link link-hover">Our Story</a>
          <a className="text-[#999] link link-hover">Privacy Policy</a>
          <a className="text-[#999] link link-hover">Terms of Services</a>
        </div>
        <div>
          <span className="text-sm text-white font-semibold uppercase tracking-wide">
            Find Us On
          </span>
          <li className="text-[#999] list-none flex items-center gap-2">
            <FaFacebook />
            <a className="text-[#999] link link-hover">Facebook</a>
          </li>
          <li className="text-[#999] list-none flex items-center gap-2">
            <FaTwitter />
            <a className="text-[#999] link link-hover">Twitter</a>
          </li>
          <li className="text-[#999] list-none flex items-center gap-2">
            <FaInstagram />
            <a className="text-[#999] link link-hover">Instagram</a>
          </li>
          <li className="text-[#999] list-none flex items-center gap-2">
            <FaPinterest />
            <a className="text-[#999] link link-hover">Pinterest</a>
          </li>
        </div>
      </div>
      <div className="text-[#999] text-center text-sm font-normal  py-5 border-t-2 border-[#999]">
        ©ColorPhotography 2023 | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
