import { useState } from "react";
import Modal from "react-modal";
import SearchModal from "../searchModal/SearchModal";
import { SearchSvg } from "../../../../utils/svg/Svg";
Modal.setAppElement("#root");

const SearchBar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <div className="inline-flex items-center max-w-full">
      <button
        onClick={() => {
          setOpenSearch(true);
        }}
        className=" hidden lg:flex md:flex items-center flex-grow-0 flex-shrink pl-2 relative w-52 border rounded-xl px-1 bg-gray-100 py-1"
        type="button"
      >
        <div className="block flex-grow flex-shrink overflow-hidden">
          Start your search
        </div>
        <div className="flex items-center justify-center relative  h-8 w-8 rounded-full">
          <SearchSvg />
        </div>
      </button>
      <button
        onClick={() => {
          setOpenSearch(true);
        }}
        type="button"
        className="lg:hidden md:hidden w-[24px] h-[24px] flex items-center flex-grow-0 flex-shrink relative hover:text-gray-700 px-1 py-1"
      >
        <SearchSvg />
      </button>
      <Modal
        isOpen={openSearch}
        onRequestClose={() => setOpenSearch(false)}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-after",
          beforeClose: "overlay-before",
        }}
        className={{
          base: "content-base-search",
          afterOpen: "content-box",
          beforeClose: "content-before",
        }}
        closeTimeoutMS={500}
      >
        <SearchModal />
      </Modal>
    </div>
  );
};

export default SearchBar;
