import { motion } from "framer-motion"
const FooterQuickLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.6 }}
      className="space-y-4 px-4 text-start text-white"
    >
      <p className="text-4xl font-bold">Quick Links</p>
      <div className="flex w-full items-start justify-between gap-4">
        <div className="flex flex-col gap-4">
          <div className="group space-y-1">
            <p className="cursor-pointer text-lg font-semibold">Home</p>
            <div className="h-[1.5px] w-0 bg-white transition-all group-hover:w-full" />
          </div>
          <div className="group space-y-1">
            <p className="cursor-pointer text-lg font-semibold">About Us</p>
            <div className="h-[1.5px] w-0 bg-white transition-all group-hover:w-full" />
          </div>
          <div className="group space-y-1">
            <p className="cursor-pointer text-lg font-semibold">Contact Us</p>
            <div className="h-[1.5px] w-0 bg-white transition-all group-hover:w-full" />
          </div>
          <div className="group space-y-1">
            <p className="cursor-pointer text-lg font-semibold">Our policy</p>
            <div className="h-[1.5px] w-0 bg-white transition-all group-hover:w-full" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="group space-y-1">
            <p className="cursor-pointer text-lg font-semibold">Our Products</p>
            <div className="h-[1.5px] w-0 bg-white transition-all group-hover:w-full" />
          </div>
          <div className="group space-y-1">
            <p className="cursor-pointer text-lg font-semibold">Buy Products</p>
            <div className="h-[1.5px] w-0 bg-white transition-all group-hover:w-full" />
          </div>
          <div className="group space-y-1">
            <p className="cursor-pointer text-lg font-semibold">Q&A</p>
            <div className="h-[1.5px] w-0 bg-white transition-all group-hover:w-full" />
          </div>
          <div className="group space-y-1">
            <p className="cursor-pointer text-lg font-semibold">Download App</p>
            <div className="h-[1.5px] w-0 bg-white transition-all group-hover:w-full" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default FooterQuickLinks
