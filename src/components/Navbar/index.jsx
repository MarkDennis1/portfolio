import { Button, Navbar } from "flowbite-react";
import React from "react";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="w-full sticky top-0 z-10 shadow-lg"
    >
      <Navbar.Brand href="#header">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Mark Dennis
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <a href="https://drive.google.com/file/d/1Q8yJ1tZ_E4td_6-5PFGtfV8Luyds7iKH/view?usp=share_link">
          <Button>Resume</Button>
        </a>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <motion.div whileHover={{ scale: 1.2 }}>
          <Navbar.Link href="#header">Home</Navbar.Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <Navbar.Link href="#about">About me</Navbar.Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <Navbar.Link href="#skills">Skills</Navbar.Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <Navbar.Link href="#works">Works</Navbar.Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <Navbar.Link href="#contact">Contact</Navbar.Link>
        </motion.div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
