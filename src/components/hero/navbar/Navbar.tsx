import { TiThMenu } from "react-icons/ti"

import { motion } from "framer-motion"

interface IProps {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = ({ setOpenMenu }: IProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
      className="flex items-center justify-between pt-5 mb-24"
    >
      <p className="from-primary cursor-pointer bg-gradient-to-r to-white bg-clip-text text-4xl font-bold uppercase tracking-wide text-transparent hover:bg-gradient-to-l">
        TN Coffee
      </p>
      <TiThMenu
        className="z-50 size-8 cursor-pointer text-white transition-all hover:scale-125"
        onClick={() => setOpenMenu((value) => !value)}
      />
    </motion.div>
  )
}

export default Navbar
