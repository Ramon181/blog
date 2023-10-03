import { useState } from "react";
import { HamburgerSvg, SearchSvg } from "../../../utils/svg/Svg";
import SideBar from "../sideBar/SideBar";

const MenuNav = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div className=" w-full flex">
      <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      <nav className="flex items-center justify-between p-4 h-14 border-b w-full">
        <button
          onClick={() => {
            setOpenSideBar(true);
          }}
          className=" bg-transparent cursor-pointer"
        >
          <HamburgerSvg />
        </button>

        <div className="flex items-center space-x-4 justify-center">
          <div class="bg-white rounded flex items-center w-full p-2 ml-4 shadow-sm border border-gray-200">
            <button class="outline-none focus:outline-none">
              <SearchSvg />
            </button>
            <input
              type="search"
              name=""
              id=""
              placeholder="Search"
              class="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"
            />
          </div>
          <div class="flex items-center pr-3 ">
            <img
              class="w-7 h-7 mr-2 rounded-full"
              src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MenuNav;
