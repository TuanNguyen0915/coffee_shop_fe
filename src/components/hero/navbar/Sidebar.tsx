import { LuFacebook, LuInstagram, LuTwitter } from "react-icons/lu"

interface IProps {
  openMenu: boolean
}

const Sidebar = ({ openMenu }: IProps) => {
  const sideBarOpen = openMenu
    ? "translate-x-0"
    : "translate-x-[1000px] opacity-0"
  return (
    <div
      className={`${sideBarOpen} from-primary/40 via-primary/80 to-primaryDark/80 absolute right-0 top-0 z-40 flex h-full w-[150px] flex-col items-center justify-center gap-10 rounded-md bg-gradient-to-b backdrop-blur-sm transition-all duration-500 max-sm:w-[100px]`}
    >
      <div className="h-[70px] w-[2px] bg-white" />
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="rounded-full border-2 border-white p-2 group hover:border-black hover:scale-105 transition-all">
          <LuFacebook className="size-10 cursor-pointer text-white transition-all group-hover:text-black group-hover:scale-105 max-lg:size-12" />
        </div>
        <div className="rounded-full border-2 border-white p-2 group hover:border-black hover:scale-105 transition-all">
          <LuTwitter className="size-10 cursor-pointer text-white transition-all group-hover:text-black group-hover:scale-105 max-lg:size-12" />
        </div>
        <div className="rounded-full border-2 border-white p-2 group hover:border-black hover:scale-105 transition-all">
          <LuInstagram className="size-10 cursor-pointer text-white transition-all group-hover:text-black group-hover:scale-105 max-lg:size-12" />
        </div>
      </div>
      <div className="h-[70px] w-[2px] bg-white" />
    </div>
  )
}

export default Sidebar
