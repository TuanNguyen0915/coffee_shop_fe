import { motion } from "framer-motion"

const LeftSide = () => {
  return (
    <div className="text-lightOrange group flex w-full flex-col max-lg:mt-10 max-lg:items-center max-lg:justify-center">
      <motion.h1
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
        className="w-full from-primaryDark to-lightOrange bg-gradient-to-r bg-clip-text text-7xl font-extrabold leading-tight text-transparent max-lg:text-4xl "
      >
        Black Coffee
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 3,
          delay: 1.5,
        }}
        className="group relative space-y-4 rounded-md bg-gradient-to-r from-gray-800/25 to-gray-600/25 px-4 py-8"
      >
        <p className="text-center text-xl font-semibold">(cà phê đen)</p>
        <p className="text-sm opacity-60 transition-all group-hover:opacity-70">
          Vietnamese black coffee, also known as , is known for its strong,
          bitter, and slightly sour taste. It's made using Robusta coffee beans,
          which are dark roasted and have a high caffeine content, and brewed
          using a small metal filter called a phin. The slow drip method used in
          Vietnam concentrates the flavor and extracts more active compounds
          from the coffee, resulting in a stronger cup.
        </p>
      </motion.div>
    </div>
  )
}

export default LeftSide
