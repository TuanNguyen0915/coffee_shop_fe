import { FaMap, FaPhone } from "react-icons/fa6"
import { motion } from "framer-motion"
const FooterInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
      className="space-y-4 px-4 text-start text-white"
    >
      <p className="text-4xl font-bold">Tn Coffee</p>
      <p className="w-full opacity-80">
        Each morning, our dedicated team meticulously crafts each cup of coffee,
        ensuring that every customer experiences the pinnacle of flavor from the
        first sip to the very last drop.
      </p>
      <div className="flex items-center gap-4">
        <FaPhone size={24} />{" "}
        <p className="text-md font-semibold">617 448 6306</p>
      </div>
      <div className="flex items-center gap-4">
        <FaMap size={24} />{" "}
        <p className="text-md font-semibold">Quincy, Ma, 02169</p>
      </div>
    </motion.div>
  )
}

export default FooterInfo
