import CardRecient from "./cardRecient/CardRecient";

const Recient = () => {
  return (
    <section class="">
      <div class="container px-6 py-10 mx-auto">
        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          <CardRecient />
          <CardRecient />
          <CardRecient />
          <CardRecient />
        </div>
      </div>
    </section>
  );
};

export default Recient;
