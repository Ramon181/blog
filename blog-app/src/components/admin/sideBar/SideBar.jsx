import { Link } from "react-router-dom";
import {
  AnimeSvg,
  CharacterSvg,
  CloseSvg,
  HomeSvg,
  LogoutSvg,
  PostSvg,
  ProfileSvg,
  ReviewSvg,
} from "../../../utils/svg/Svg";

const SideBar = ({ openSideBar, setOpenSideBar }) => {
  return (
    <div className="flex justify-center flex-row w-auto text-gray-800">
      <div
        className={`fixed flex flex-col top-0 w-[13rem] bg-white h-full border-r duration-1000 ${
          openSideBar ? "left-0" : "left-[-300px]"
        }`}
      >
        <div className="flex items-center justify-center h-14 border-b">
          <Link
            className="ceviche_one uppercase font-semibold text-2xl tracking-wide"
            to={"/"}
          >
            <span className="text-[#0079c1]">Anime</span>
            gyarakushī
          </Link>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">
                  Menu
                </div>
              </div>
            </li>
            <li>
              <Link
                to={"/"}
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#0079c1] pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <HomeSvg />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Panel
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={"/post-list"}
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#0079c1] pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <PostSvg />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Publicaciones
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={"anime-list"}
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#0079c1] pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <AnimeSvg />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Animes
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={"character-list"}
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#0079c1] pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <CharacterSvg />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Personajes
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={"review-list"}
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#0079c1] pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <ReviewSvg />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Comentarios
                </span>
                <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                  1.2k
                </span>
              </Link>
            </li>

            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">
                  Configuración
                </div>
              </div>
            </li>
            <li>
              <Link
                to={"profile"}
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#0079c1] pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <ProfileSvg />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Perfil
                </span>
              </Link>
            </li>

            <li>
              <button
                type="button"
                className="relative flex w-full flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-[#0079c1] pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <LogoutSvg />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Salir
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <button
        onClick={() => {
          setOpenSideBar(false);
        }}
        className={`fixed left-[13rem] duration-1000 ${
          openSideBar ? " top-3 " : "top-[-3rem]"
        }`}
      >
        <CloseSvg />
      </button>
    </div>
  );
};

export default SideBar;
