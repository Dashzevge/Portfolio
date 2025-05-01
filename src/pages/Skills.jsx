import React, { useState } from "react";
import Skill from "../components/Skill";
import { SKILLS } from "../constants/index";

const groupFilters = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "DevOps",
  "Cloud & Tools",
];

const Skills = () => {
  const [search, setSearch] = useState("");
  const [group, setGroup] = useState("All");

  const filteredSkills = SKILLS.filter((skill) => {
  const matchesSearch =
      skill.label.toLowerCase().includes(search.toLowerCase());
  const matchesGroup = group === "All" || skill.group === group;
    return matchesSearch && matchesGroup;
  }).sort((a, b) => b.years - a.years); 

  return (
    <div className="border-b border-neutral-800 pb-24 px-4 max-w-4xl mx-auto">
      <h1 className="my-10 text-center text-4xl">Skills</h1>

      <div className="mb-6 flex flex-col md:flex-row md:items-center gap-4">

        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 rounded-lg border border-neutral-700 bg-neutral-900 p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <div className="w-full md:w-auto overflow-x-auto">
          <div className="inline-flex gap-2 whitespace-nowrap pr-2">
            {groupFilters.map((g) => (
              <button
                key={g}
                onClick={() => setGroup(g)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  group === g
                    ? "bg-cyan-500 text-neutral-900"
                    : "bg-neutral-800 text-white hover:bg-neutral-700"
                } transition-colors`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      </div>
      {filteredSkills.length > 0 ? (
        <div className="space-y-6">
          {filteredSkills.map((skill, index) => (
            <Skill key={index} {...skill} />
          ))}
        </div>
      ) : (
        <p className="text-center text-neutral-500">
          No matching skills found.
        </p>
      )}
    </div>
  );
};

export default Skills;
