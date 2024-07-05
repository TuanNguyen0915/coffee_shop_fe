import { motion } from "framer-motion"
import heroImg from '../../assets/images/hero_img.png'
const HeroImage = () => {
  return (
    <div className="relative z-30 flex items-center justify-center">
      {/* orange ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="border-primary absolute left-[60%] top-[15%] h-[150px] w-[150px] rounded-full border-[1.2rem] lg:h-[200px] lg:w-[200px]"
      />
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
        }}
        src={heroImg}
        alt="coffee"
        className="img-shadow hover:img-shadow2 z-20 transition-all max-lg:h-[70%] max-lg:w-[70%]"
      />
    </div>
  )
}

export default HeroImage
