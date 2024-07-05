import { motion } from "framer-motion"
const RightSide = () => {
  return (
    <div className="text-lightOrange flex w-full flex-col justify-between gap-24 max-lg:hidden">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="scale-150 text-[5.5rem] font-extrabold leading-none tracking-wide text-black/15"
      >
        TN COFFEE SHOP
      </motion.h1>
      <div className="group">
        <motion.h1
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.4,
          }}
          className="from-primaryDark to-lightOrange w-full bg-gradient-to-r bg-clip-text text-7xl font-extrabold leading-tight text-transparent max-lg:text-4xl"
        >
          Milk Coffee
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 3,
            delay: 1.5,
          }}
          className="relative space-y-4 rounded-md bg-gradient-to-r from-gray-600/25 to-gray-900/25 px-4 py-8"
        >
          <p className="text-center text-xl font-semibold">(Cà Phê Sữa Đá)</p>

          <p className="text-sm opacity-40 transition-all group-hover:opacity-70">
            Vietnamese coffee is an intensely strong and sweet coffee, that’s
            sure to dissolve your morning daze and perk you up for the day. Its
            dark roast coffee and potent condensed milk, slowly dripped through
            a metal filter (phin) make this a unique coffee.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default RightSide
