const TablesPost = () => {
  return (
    <div className="w-full">
      <div className=" flex justify-center font-sans shadow-[0px_0px_3px_0px_#000] overflow-hidden">
        <div className="bg-white overflow-x-auto scroll-smooth scrollbar rounded ">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600  uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Titulo</th>
                <th className="py-3 px-6 text-left">Descripción</th>
                <th className="py-3 px-6 text-left">Serie</th>
                <th className="py-3 px-6 text-center">Imagenes</th>
                <th className="py-3 px-6 text-left">Textos</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-3 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="mr-2">
                      <img className=" w-6 h-6 rounded-full" src="" alt="" />
                    </div>
                    <div className="flex items-center w-full justify-between min-w-0 max-w-[7rem]">
                      <span className="font-medium truncate">amspdap</span>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center w-full justify-between min-w-0 max-w-[7rem]">
                    <span className="font-medium truncate">ansonoa</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center w-full justify-between min-w-0 max-w-[7rem]">
                    <span className="font-medium truncate">asmpa</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center justify-center">
                    <img
                      className="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125"
                      src=""
                    />
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center w-full justify-between min-w-0 max-w-[7rem]">
                    <span className="font-medium truncate">asas</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="flex item-center justify-center">
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </div>
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TablesPost;
