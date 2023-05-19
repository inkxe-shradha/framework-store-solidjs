import { For, Show, createResource } from "solid-js";
import Card from "../components/Card";
import { A } from "@solidjs/router";

const fetchTechStacks = async () => {
  return (await fetch("http://localhost:4000/techstack")).json();
};

const Home = () => {
  // Todo: Solid way to fetch the API details from the server
  const [techstack] = createResource(fetchTechStacks);
  return (
    <>
      {/* Show when (If/Else) */}
      <Show when={techstack()} fallback={<p> Data Loading </p>}>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 py-4">
          {/* Looping through the components and passed the props to the custom components */}
          <For each={techstack()}>
            {(tech) => (
              <Card rounded={true} flat={true}>
                <img
                  src={tech.image}
                  class="rounded-lg h-[200px] w-full"
                  alt="Product Image"
                />
                <h2 class="my-3 font-bold">{tech.title}</h2>
                <A href={"/techdetails/" + tech.id} class="btn">
                  View Product
                </A>
              </Card>
            )}
          </For>
        </div>
      </Show>
      {/* End */}
    </>
  );
};

export default Home;
