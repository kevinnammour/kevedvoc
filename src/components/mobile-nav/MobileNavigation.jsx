import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { FiCode } from "react-icons/fi";
import { IoGitNetworkOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import "./mobile-nav.scss";
import { motion } from "framer-motion";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="hi-menu-alt-3-wrapper">
        <HiMenuAlt3 className="hi-menu-alt-3" onClick={() => setOpen(true)} />
      </div>
      {open ? (
        <motion.div
          className="mobile-sidebar"
          initial={{ width: 0 }}
          animate={{ width: 90 }}
        >
          <div className="io-close-wrapper">
            <IoClose className="io-close" onClick={() => setOpen(false)} />
          </div>

          <div className="mobile-nav-links-wrapper">
            <div className="mobile-nav-link-wrapper">
              <BsPerson className="mobile-nav-link" onClick={() => setOpen(false)} />
            </div>

            <div className="mobile-nav-link-wrapper">
              <FiCode className="mobile-nav-link" onClick={() => setOpen(false)} />
            </div>

            <div className="mobile-nav-link-wrapper">
              <IoGitNetworkOutline className="mobile-nav-link" onClick={() => setOpen(false)} />
            </div>

            <div className="mobile-nav-link-wrapper">
              <MdOutlineMail className="mobile-nav-link" onClick={() => setOpen(false)} />
            </div>
          </div>
        </motion.div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MobileNavigation;