import { motion } from "framer-motion"
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa6"

const FooterSocial = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.8 }}
      className="space-y-10 px-4 text-start text-white"
    >
      <p className="text-4xl font-bold">Follow Us</p>
      <div className="flex w-full items-center gap-6">
        <FaFacebook
          size={32}
          className="cursor-pointer transition-all hover:scale-125"
        />
        <FaInstagram
          size={32}
          className="cursor-pointer transition-all hover:scale-125"
        />
        <FaTwitter
          size={32}
          className="cursor-pointer transition-all hover:scale-125"
        />
        <FaTelegram
          size={32}
          className="cursor-pointer transition-all hover:scale-125"
        />
        <FaGoogle
          size={32}
          className="cursor-pointer transition-all hover:scale-125"
        />
      </div>
      <p className="text-2xl font-semibold">Payment Methods</p>
      <img src="/src/assets/images/website/payment_methods.webp" />
    </motion.div>
  )
}

export default FooterSocial
