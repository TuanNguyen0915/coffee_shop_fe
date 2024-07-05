import CoffeeList from "./CoffeeList"
import { motion } from "framer-motion"
const Services = () => {
  return (
    <div className="container my-16 flex flex-col items-center justify-center gap-4">
      <motion.h1
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          duration: 2,
        }}
        className="text-center xl:text-6xl text-4xl font-bold"
      >
        Fresh and <span className="text-primary">Tasty</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          duration: 2,
          delay: 0.5,
        }}
        className="flex w-1/2 items-center justify-center"
      >
        <p className="text-center text-gray-600">
          Each morning, our dedicated team meticulously crafts each cup of
          coffee, ensuring that every customer experiences the pinnacle of
          flavor from the first sip to the very last drop. Our commitment to
          excellence drives us to create the finest brews, leaving no room for
          compromise.
        </p>
      </motion.div>
      <CoffeeList />
    </div>
  )
}

export default Services
