const CardRecient = () => {
    return (
        <div class="lg:flex bg-gray-100 rounded-lg">
            <img
              class="object-cover w-full h-56 rounded-l-lg lg:w-64"
              src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />

            <div class="flex flex-col justify-between py-6 lg:mx-6">
              <a
                href="#"
                class="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
              >
                How to use sticky note for problem solving
              </a>

              <span class="text-sm text-gray-500 dark:text-gray-300">
                On: 20 October 2019
              </span>
            </div>
          </div>
    )
}

export default CardRecient