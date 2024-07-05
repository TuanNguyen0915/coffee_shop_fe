import { motion } from "framer-motion"
import phone from "../../assets/images/website/phone_img.png"
import appleStore from "../../assets/images/website/app_store.png"
import googlePlayStore from "../../assets/images/website/play_store.png"
const Download = () => {
  return (
    <div className="container my-40 flex justify-between max-lg:flex-col-reverse">
      <div className="flex w-full items-center justify-center">
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 1,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          src={phone}
          className="scale-75 max-lg:scale-50"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.4,
          }}
          className="text-primary text-6xl font-bold"
        >
          Download our app
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.6,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          className="text-darkGray w-1/2 text-center text-lg"
        >
          Experience the ease, convenience, and safety of ordering Tn Coffee
          from your phone. Save time and enjoy our services.
        </motion.p>
        <div className="flex w-full items-center justify-between gap-10">
          <div className="flex w-full items-center justify-center">
            <motion.img
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                delay: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              src={appleStore}
              className="max-lg:scale-75"
            />
          </div>
          <div className="flex w-full items-center justify-center">
            <motion.img
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                delay: 1,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              src={googlePlayStore}
              className="max-lg:scale-75"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Download
