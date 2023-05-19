import { useParams } from "@solidjs/router";
import { Show, createResource, onCleanup } from "solid-js";
import { useContextHook } from "../context/GlobalContext";

const getSingleTechStackDetail = async (techId) => {
  return (await fetch("http://localhost:4000/techstack/" + techId)).json();
};

const TechDetails = () => {
  const params = useParams(); // * Get the params/query parameters from the URL

  // * Fetch the details for the parameters and passing the id into the  resource functions
  const [techstack] = createResource(params.id, getSingleTechStackDetail);

  // * Calling the store
  const { storeItems, setStoreItems } = useContextHook();
  setStoreItems({ ...storeItems, isBannerVisible: false });

  //  * On Component destruction clean up the codes.
  onCleanup(() => {
    setStoreItems({ ...storeItems, isBannerVisible: true });
  });

  // Getting the id property from the router parameters
  return (
    <div class="my-7">
      <Show when={techstack()} fallback={<p> I am loading ...</p>}>
        <div class="grid grid-cols-1">
          <div class="max-w-full m-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg m-auto"
                src={techstack().image}
                alt="name"
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {techstack().title} -{" "}
                  <font class="text-lime-500 font-extrabold">
                    {techstack().version}
                  </font>
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {techstack().description}
              </p>
              <a
                href={techstack().link}
                target="_blank"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Show>
    </div>
  );
};

export default TechDetails;
