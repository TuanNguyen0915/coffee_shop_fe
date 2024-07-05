import OrderForm from "./OrderForm"
import { motion } from "framer-motion"
import map from '../../assets/images/map.png'
const Order = () => {
  return (
    <div className="container my-28 flex items-center justify-between max-lg:flex-col-reverse max-lg:gap-10 lg:grid-cols-2 lg:gap-28">
      <div className="w-full lg:w-[80%]">
        <OrderForm />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 4,
          delay: 1,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className="flex w-full items-center justify-center px-4 lg:justify-start"
      >
        <img
          src={map}
          alt="map"
          className="h-[400px] w-full"
        />
      </motion.div>
    </div>
  )
}

export default Order
