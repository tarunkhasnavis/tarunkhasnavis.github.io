import React from "react"
import './css/Socials.scss'
import { motion } from "framer-motion"

function Socials() {
    return (
        <div className="socials">
          <motion.div
            orientation="left"
            className="social-nav-links"
            initial={{ y: 250 }}
            animate={{ y: 0 }}
            transition={{ delay: 3.5, duration: 1, type: "spring" }}
          >
            <ul>
              <li>
                <a
                  href="https://github.com/tarunkhasnavis"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <motion.i
                    whileHover={{ scale: 1.15 }}
                    className="fa fa-github"
                  ></motion.i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/tarunkhasnavis/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <motion.i
                    whileHover={{ scale: 1.15 }}
                    className="fa fa-linkedin"
                  ></motion.i>
                </a>
              </li>
              <li>
                <a
                  href="mailto:khasnavistarun@gmail.com"
                  target="_blank"
                  aria-label="Email"
                >
                  <motion.i
                    whileHover={{ scale: 1.15}}
                    className="fa fa-envelope"
                  ></motion.i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/tarunkhasnavis/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <motion.i
                    whileHover={{ scale: 1.15 }}
                    className="fa fa-instagram"
                  ></motion.i>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
    )
}

export default Socials