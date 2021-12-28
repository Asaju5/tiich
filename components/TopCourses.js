import Cards from "./Cards";
import LargeCard from "./LargeCard";

function TopCourses() {
  const data = [
    {
      img: "/images/artificialInt.jpg",
      title: "Artificial Intelligence",
    },
    {
      img: "/images/digitalMkt.jpg",
      title: "Digital Marketing",
    },
    {
      img: "/images/ecommerce.png",
      title: "Ecommerce",
    },
    {
      img: "/images/Life-Science.jpg",
      title: "Life Science",
    },
    {
      img: "/images/machineL.jpeg",
      title: "Machine Learning",
    },
  ];
  return (
    <main className="max-w-7xl mx-auto px-8 sm:px-16">
      <section className="pt-6">
        <h2 className="text-2xl md:text-4xl font-semibold py-8">Top Courses</h2>

        <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
          {data?.map(({ img, title }) => (
            <Cards key={img} img={img} title={title} />
          ))}
        </div>
      </section>

      <section className="pt-6">
        <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
          {data?.map(({ img, title }) => (
            <Cards key={img} img={img} title={title} />
          ))}
        </div>
      </section>
      <LargeCard
        title="Learn, Team-Up, Build, Launch"
        description="Learn anything in your language, team up with the 
        right people and launch your ideas with capitals
         from investors"
         button="Give a Try"
      />
    </main>
  );
}

export default TopCourses;
