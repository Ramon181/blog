import { SearchSvg } from "../../../../utils/svg/Svg";

const SearchModal = () => {
  return (
    <article class="h-auto w-full p-5 animation_search bg-white rounded-md ">
      <div class="flex flex-col w-full h-auto ">
        <div class="flex w-full h-auto justify-center items-center">
          <div class="flex w-full h-auto pb-3 justify-center items-center text-2xl font-bold">
            <div className="relative w-full">
              <label htmlFor="Search" className="sr-only">
                {" "}
                Search{" "}
              </label>

              <input
                type="text"
                id="Search"
                placeholder="Search for..."
                className="w-full rounded-md border-gray-900 border-[1px] p-2.5 pe-10 shadow-sm sm:text-sm"
              />

              <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-700"
                >
                  <span className="sr-only">Search</span>
                  <SearchSvg/>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div class="flex w-full h-auto py-10 px-2 justify-center items-center bg-gray-200 rounded text-center text-gray-500">
          Resultados
        </div>
      </div>
    </article>
  );
};
export default SearchModal;
