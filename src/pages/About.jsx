import Card from "../components/Card";

const About = () => {
  return (
    <div class="max-w-prose my-8 mx-auto">
      <Card rounded={true}>
        <h2 class="text-center text-2xl font-bold font-mono"> About Us</h2>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          ratione doloribus ex eius ab consequuntur vitae quam a esse adipisci
          quia exercitationem dolorum expedita repudiandae harum nostrum
          repellat, recusandae aperiam?
        </p>
      </Card>
    </div>
  );
};

export default About;
