import FooterInfo from "./FooterInfo"
import FooterQuickLinks from "./FooterQuickLinks"
import FooterSocial from "./FooterSocial"
import { motion } from "framer-motion"
const Footer = () => {
  return (
    <footer className="from-primary to-primaryDark mt-32 bg-gradient-to-r">
      <div className="container space-y-8 py-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 xl:grid-cols-3">
          <FooterInfo />
          <FooterQuickLinks />
          <FooterSocial />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 5,
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.8,
          }}
          className="h-[2px] w-full bg-white"
        />
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 1,
          }}
          className="text-center italic text-white"
        >
          Copyright © 2024 Tn Coffee. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer
