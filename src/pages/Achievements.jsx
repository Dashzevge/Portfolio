import { ACHIEVEMENTS } from "../constants";

const Achievements = () => {
  return (
    <div className="border-b border-neutral-900 pb-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="my-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Career Timeline
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-neutral-100">
            Achievements
          </h1>
          <p className="mt-3 text-sm text-neutral-400">
            A progression from junior developer to senior full stack leadership.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-3 top-0 h-full w-px bg-neutral-800 md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-10">
            {ACHIEVEMENTS.slice().reverse().map((achievement, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="relative pl-10 md:pl-0">
                  <span className="absolute left-0 top-2 h-6 w-6 rounded-full border border-cyan-400/40 bg-neutral-950 shadow-[0_0_12px_rgba(34,211,238,0.35)] md:left-1/2 md:-translate-x-1/2" />
                  <div
                    className={[
                      "rounded-2xl border border-neutral-800 bg-neutral-950/70 p-6 backdrop-blur",
                      "w-full md:w-1/2",
                      isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12",
                    ].join(" ")}
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
                      <span className="rounded-full border border-neutral-700 px-2 py-1">
                        {achievement.period}
                      </span>
                      <span className="rounded-full border border-neutral-700 px-2 py-1">
                        {achievement.duration}
                      </span>
                      <span className="rounded-full border border-neutral-700 px-2 py-1">
                        {achievement.employmentType}
                      </span>
                      <span className="rounded-full border border-neutral-700 px-2 py-1">
                        {achievement.workMode}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-neutral-100">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-neutral-300">
                      {achievement.company}
                    </p>
                    <p className="mt-2 text-sm text-neutral-500">
                      {achievement.location}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
