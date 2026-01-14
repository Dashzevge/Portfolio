import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Skill from "../components/Skill";
import { GROUP_NAMES, SKILLS } from "../constants";

const Skills = () => {
  const [search, setSearch] = useState("");
  const [group, setGroup] = useState("All");

  const filteredSkills = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    return SKILLS.filter((skill) => {
      const matchesSearch = skill.label.toLowerCase().includes(normalizedSearch);
      const matchesGroup = group === "All" || skill.group === group;
      return matchesSearch && matchesGroup;
    }).sort((a, b) => b.years - a.years);
  }, [search, group]);

  const showClear = search.trim().length > 0 || group !== "All";

  return (
    <div className="border-b border-neutral-800 pb-24 px-4 max-w-5xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl border border-cyan-400/10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 px-6 py-10 sm:px-10">
        <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative z-10"
        >
          <h1 className="text-center text-4xl font-semibold text-white">Skills</h1>
          <p className="mt-3 text-center text-sm text-neutral-400">
            Filter by focus area or search for specific tools, languages, and platforms.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-cyan-200">
              Showing {filteredSkills.length} of {SKILLS.length}
            </span>
            <span className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-neutral-300">
              Group: {group}
            </span>
            {showClear && (
              <button
                onClick={() => {
                  setSearch("");
                  setGroup("All");
                }}
                className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-neutral-300 hover:border-cyan-400/40 hover:text-cyan-200 transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>
        </motion.div>
      </div>

      <div className="mt-10 mb-6 flex flex-col md:flex-row md:items-center gap-4">
        <div className="w-full md:w-1/2">
          <label className="sr-only" htmlFor="skills-search">
            Search skills
          </label>
          <input
            id="skills-search"
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-neutral-700 bg-neutral-950/80 p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <div className="w-full md:w-auto overflow-x-auto">
          <div className="inline-flex gap-2 whitespace-nowrap pr-2">
            {GROUP_NAMES.map((g) => (
              <button
                key={g}
                onClick={() => setGroup(g)}
                className={[
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  "border border-transparent focus-visible:outline-none",
                  "focus-visible:ring-2 focus-visible:ring-cyan-500/70",
                  group === g
                    ? "bg-cyan-500 text-neutral-900"
                    : "bg-neutral-900 text-white hover:bg-neutral-800 border-neutral-800",
                ].join(" ")}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      </div>
      {filteredSkills.length > 0 ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
          }}
          className="space-y-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={`${skill.label}-${index}`}
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            >
              <Skill {...skill} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-8 text-center">
          <p className="text-neutral-400">No matching skills found.</p>
          {showClear && (
            <button
              onClick={() => {
                setSearch("");
                setGroup("All");
              }}
              className="mt-4 rounded-full border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm text-neutral-300 hover:border-cyan-400/40 hover:text-cyan-200 transition-colors"
            >
              Reset filters
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Skills;
