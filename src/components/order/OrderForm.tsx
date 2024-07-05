import { motion } from "framer-motion"

const OrderForm = () => {
  return (
    <div className="w-full space-y-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 10,
          delay: 0.2,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className="text-5xl font-bold tracking-wide"
      >
        Buy our products from anywhere
      </motion.h1>
      <div className="flex w-full items-center gap-4">
        <motion.input
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 10,
            delay: 0.4,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          type="text"
          placeholder="Name"
          className="border-lightGray w-1/3 rounded-lg border px-4 py-2"
        />
        <motion.input
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 10,
            delay: 0.4,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          type="text"
          placeholder="Email"
          className="border-lightGray w-2/3 rounded-lg border px-4 py-2"
        />
      </div>
      <motion.input
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 10,
          delay: 0.6,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        type="text"
        placeholder="Address"
        className="border-lightGray w-full rounded-lg border px-4 py-2"
      />
      <div className="flex w-full items-center gap-4">
        <motion.input
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 10,
            delay: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          type="text"
          placeholder="Country"
          className="border-lightGray w-2/3 rounded-lg border px-4 py-2"
        />
        <motion.input
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 10,
            delay: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          type="text"
          placeholder="Zipcode"
          className="border-lightGray w-1/3 rounded-lg border px-4 py-2"
        />
      </div>
      <motion.button
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          delay: 1,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className="bg-primary/90 border-primary/90 hover:text-primary w-full rounded-lg border px-4 py-2 text-xl font-bold tracking-wider text-white transition-all hover:bg-transparent"
      >
        Order
      </motion.button>
    </div>
  )
}

export default OrderForm
