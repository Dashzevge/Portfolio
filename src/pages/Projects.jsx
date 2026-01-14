import { PROJECTS } from "../constants";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section className="border-b border-neutral-900 pb-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="my-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Selected Work
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-neutral-100">
            Projects
          </h1>
          <p className="mt-3 text-sm text-neutral-400">
            A focused set of products and platforms across telecom, finance, and education.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
