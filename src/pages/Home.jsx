import { For, Show, createResource } from "solid-js";
import Card from "../components/Card";
import { A } from "@solidjs/router";

const fetchTechStacks = async () => {
  return (await fetch("http://localhost:4000/techstack")).json();
};

const Home = () => {
  const [techstack] = createResource(fetchTechStacks);
  return (
    <>
      {/* Show when (If/Else) */}
      <Show when={techstack()} fallback={<p> Data Loading </p>}>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 py-4">
          {/* <Card rounded={true} flat={false}>
            <h2>Angular</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              dolorum vitae delectus laboriosam, harum consectetur ducimus
              repudiandae sint eligendi, dolore sit dignissimos nam reiciendis,
              laudantium placeat tempora vel commodi fugit.
            </p>
            <button class="btn">View</button>
          </Card>
          <Card rounded={false} flat={true}>
            <h2>Angular</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              dolorum vitae delectus laboriosam, harum consectetur ducimus
              repudiandae sint eligendi, dolore sit dignissimos nam reiciendis,
              laudantium placeat tempora vel commodi fugit.
            </p>
            <button class="btn">View</button>
          </Card> */}
          {/* Looping through the components */}
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
