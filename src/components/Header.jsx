import { splitProps } from "solid-js";
import banner from "../assets/banner.jpg";
import { A } from "@solidjs/router"; //
import { useContextHook } from "../context/GlobalContext";

const Header = (props) => {
  const [local] = splitProps(props, ["toggleTheme", "theme"]);
  console.log(local);
  const { storeItems } = useContextHook();

  const totalPosts = storeItems;
  return (
    <>
      <header
        class="my-4 p-2 text-xl flex item-center  gap-4"
        classList={{
          "bg-neutral-900": local.theme,
          "text-white": local.theme,
        }}
      >
        <span
          class="material-symbols-outlined cursor-pointer "
          onClick={local.toggleTheme}
        >
          light_mode
        </span>
        <h1>Frontend Dev</h1>
        <nav class="ms-5">
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              <li>
                <A
                  href="/"
                  class="block py-2 pl-3 pr-4 text-gray-900 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </A>
              </li>
              <li>
                <A
                  href="/about"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </A>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Show when={storeItems.isBannerVisible} fallback={<></>}>
        <img
          src={banner}
          class="rounded-md"
          alt="Dev Banner"
          srcset={banner}
          width={"100%"}
        />
        <div class="flex justify-between items-center">
          <h2 class="my-4 font-bold text-lg">Total Blogs : 6</h2>
          <span class="text-black font-black text-sm">
            {new Date().toLocaleDateString()}
          </span>
        </div>
      </Show>
    </>
  );
};

export default Header;
