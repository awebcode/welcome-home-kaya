import React from "react";

const CustomTable = ({ projects }) => {
  const customPhaseOrder = [
    "Clearing",

    "Foundation",
    "Site Preparation",
    "Pre-Construction" || "Pre Construction",
    "Farming/Roofing",
    "Mep Roughing and Systems",
    "Sheetrock/Insulation",
    "Finishes",
    "Punchlist",
    "Completed",
  ];
  const phases = customPhaseOrder.filter((phase) =>
    projects.some((project) => project.currentPhase === phase)
  );
  // const phases = [...new Set(projects.map((project) => project.currentPhase))];

  return (
    <div className="overflow-x-scroll">
      <div className="flex">
        <h1 className="p-2 text-3xl text-gray-800">Projects</h1>
        <h1 className="p-2 text-3xl text-gray-800 ml-8">Project Phase</h1>
      </div>
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="text-center  border-r  border-l p-4 text-lg text-gray-600">
              Projects
            </th>
            {customPhaseOrder.map((phase, index) => (
              <th
                key={phase}
                className={`text-center text-sm text-gray-600 ${
                  index === phases.length - 1 ? "border-t" : ""
                } border-r p-4`}
              >
                {phase}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.name}>
              <td className="border p-4">
                <h3 className="text-sm mb-1">{project.title}</h3>
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="w-40 h-20 mx-auto object-cover rounded-md"
                />
              </td>
              {customPhaseOrder.map((phase) => (
                <td key={phase} className="border p-4 ">
                  {project.currentPhase === phase && (
                    <img
                      src={project.images[0]}
                      alt={`${project.name} - ${phase}`}
                      className="w-full h-full mx-auto object-cover rounded-md"
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
