import { motion } from "framer-motion"
import blackCoffee from "../../assets/images/black_coffee.png"
import milkCoffee from "../../assets/images/milk_coffee.png"
import eggCoffee from "../../assets/images/egg_coffee.png"
const CoffeeList = () => {
  return (
    <div className="mb-16 grid w-full grid-cols-1 place-items-center gap-4 lg:grid-cols-2 xl:grid-cols-3">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
        className="flex flex-col items-center justify-center gap-4 xl:translate-y-20"
      >
        <img
          src={blackCoffee}
          className="h-[300px] w-[400px]"
        />
        <p className="text-primaryDark text-3xl font-semibold capitalize">
          Black coffee
        </p>
        <div className="space-y-2 text-center">
          <p>10 calories</p>
          <p>2 grams of carbohydrates</p>
          <p>1 gram of protein</p>
          <p>0 grams of fat</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.6 }}
        className="flex flex-col items-center justify-center gap-4"
      >
        <img
          src={milkCoffee}
          className="h-[300px] w-[400px]"
        />
        <p className="text-primaryDark text-3xl font-semibold capitalize">
          Milk coffee
        </p>
        <div className="space-y-2 text-center">
          <p>150-180 calories</p>
          <p>2 grams of carbohydrates</p>
          <p>5 gram of protein</p>
          <p>3.6 grams of fat</p>
          <p>31 grams of sugar</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.8 }}
        className="flex flex-col items-center justify-center gap-4 xl:translate-y-20"
      >
        <img
          src={eggCoffee}
          className="h-[300px] w-[400px]"
        />
        <p className="text-primaryDark text-3xl font-semibold capitalize">
          Egg coffee
        </p>
        <div className="space-y-2 text-center">
          <p>90-100 calories</p>
          <p>1 grams of carbohydrates</p>
          <p>3 gram of protein</p>
          <p>8 grams of fat</p>
          <p>12 grams of sugar</p>
        </div>
      </motion.div>
    </div>
  )
}

export default CoffeeList
