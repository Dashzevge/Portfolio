import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SKILLS } from "../constants";

const skillIconMap = new Map(
  SKILLS.map((skill) => [skill.label.toLowerCase(), skill])
);

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ project }) => {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950/60 transition hover:border-cyan-400/40 hover:bg-neutral-950/80">
      <div className="relative h-48 overflow-hidden sm:h-56">
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          whileHover={{ scale: 1.12 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
      </div>
      <div className="flex h-full flex-col gap-4 p-6">
        <div>
          <h3 className="text-xl font-semibold text-neutral-100">{project.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">{project.description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xl">
          {project.technologies.map((tech, index) => {
            const skill = skillIconMap.get(tech.toLowerCase());
            if (!skill) return null;
            const Icon = skill.Icon;
            return (
              <motion.span
                key={`${tech}-${index}`}
                className={`rounded-full border border-neutral-800 bg-neutral-900/60 p-2 ${skill.color}`}
                title={tech}
                aria-label={tech}
                whileHover={{ y: -4, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <Link to={`/skills?search=${encodeURIComponent(skill.label)}`}>
                  <Icon />
                </Link>
              </motion.span>
            );
          })}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition group-hover:text-cyan-200"
          >
            Visit project
            <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard
