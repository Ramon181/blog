import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import SearchBar from "./searchBar/SearchBar";
import FullPageMenu from "./fullPageMenu/FullPageMenu";
import SingIn from "../singIn/SingIn";
import { authState } from "../../../features/auth/authSlice";
import { useAppDispatch } from "../../../hooks/store";

Modal.setAppElement("#root");

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSingIn, setOpenSingIn] = useState(false);

  const menuToggle = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
      dispatch(authState(user));
    } else {
      dispatch(
        authState({
          userName: null,
          name: null,
          token: null,
          role: null,
          profile: null,
          banned: null,
        })
      );
    }
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`w-full flex justify-between items-center fixed top-0 z-30 border-gray-100 mx-auto px-8 h-16 ${
        scrolled ? "bg-white border-b-[1px]" : ""
      }`}
    >
      <div className=" flex justify-center items-center space-x-4">
        <a
          className="ceviche_one uppercase font-semibold text-2xl tracking-wide"
          href="/"
        >
          <span className="text-[#0079c1]">Anime</span>
          gyarakushī
        </a>
        <div className=" hidden md:flex lg:flex">
          <SearchBar />
        </div>
      </div>
      <div className=" flex flex-row justify-center items-center">
        <div className="lg:hidden md:hidden flex">
          <FullPageMenu menuOpen={menuOpen} />
        </div>
        <div className="lg:hidden md:hidden flex">
          <SearchBar />
          <span
            className={`menuicon ${menuOpen ? "active" : ""}`}
            id="toggle"
            onClick={menuToggle}
          ></span>
        </div>
        <ul className=" hidden md:flex lg:flex flex-row justify-center space-x-4 font-semibold border-r-[1px] px-2">
          <li className=" hover:text-[#0079c1]">
            <Link to={"/"}>Inicio</Link>
          </li>
          <li className=" hover:text-[#0079c1]">
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li className=" hover:text-[#0079c1]">
            <Link to={"/animes"}>Animes</Link>
          </li>
        </ul>
        <div className="px-2 md:flex hidden lg:flex flex-row justify-center font-semibold">
          <div class="block">
            <div class="inline relative parent">
              <a class=" inline-flex items-center relative p-2 border rounded-full hover:shadow-sm">
                <div class="pl-1 text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 17h18M3 12h18M3 7h18"
                    />
                  </svg>
                </div>

                <div class="w-12 pl-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M12 4a8 8 0 0 0-6.96 11.947A4.99 4.99 0 0 1 9 14h6a4.99 4.99 0 0 1 3.96 1.947A8 8 0 0 0 12 4Zm7.943 14.076A9.959 9.959 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.958 9.958 0 0 0 2.057 6.076l-.005.018l.355.413A9.98 9.98 0 0 0 12 22a9.947 9.947 0 0 0 5.675-1.765a10.055 10.055 0 0 0 1.918-1.728l.355-.413l-.005-.018ZM12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </a>
              <ul class="child transition duration-300 md:absolute top-7 right-0 md:w-48 bg-white md:shadow-lg md:rounded-b ">
                <li>
                  <div
                    onClick={() => {
                      setOpenSingIn(true);
                    }}
                    type="button"
                    class="flex px-4 py-3 cursor-pointer hover:bg-gray-50"
                  >
                    Ingresar
                  </div>
                </li>
                <li>
                  <Link
                    to={"/sing-up"}
                    href="#"
                    class="flex px-4 py-3 hover:bg-gray-50"
                  >
                    Registrarse
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={openSingIn}
        onRequestClose={() => setOpenSingIn(false)}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-after",
          beforeClose: "overlay-before",
        }}
        className={{
          base: "content-base",
          afterOpen: "content-box",
          beforeClose: "content-before",
        }}
        closeTimeoutMS={500}
      >
        <SingIn setOpenSingIn={setOpenSingIn} />
      </Modal>
    </nav>
  );
};

export default NavBar;
