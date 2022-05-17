import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import "./mobile-nav.scss";
import { motion } from "framer-motion";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <motion.div whileTap={{ scale: 1.1 }} whileHover={{ scale: 1.1 }} className="hi-menu-alt-3-wrapper">
        <HiMenuAlt3 className="hi-menu-alt-3" onClick={() => setOpen(true)} />
      </motion.div>
      {open ? <div className="mobile-sidebar"></div> : <></>}
    </div>
  );
};

export default MobileNavigation;