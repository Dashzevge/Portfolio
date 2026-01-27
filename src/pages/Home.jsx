import SkillsScrollFill from "../components/test";


const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-700">Explore my projects and skills.</p>
      <SkillsScrollFill />
    </div>
  );
};

export default Home;
