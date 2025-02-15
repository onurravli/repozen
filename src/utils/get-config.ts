import { ProjectConfig } from "@/types/project-config";
import { ProjectType } from "@/types/project-type";

import { confirm, input, select } from "@inquirer/prompts";

export async function getConfig() {
  const projectType = await select({
    message: "What is the type of the project?",
    choices: [
      {
        name: "Monolithic",
        value: "monolithic",
      },
      {
        name: "Microservice",
        value: "microservice",
      },
    ],
  });
  const projectName = await input({
    message: "What is the name of the project?",
    required: true,
  });
  const projectDescription = await input({
    message: "What is the description of the project?",
    required: false,
  });
  const projectVersion = await input({
    message: "What is the version of the project?",
    required: false,
  });
  const initializeGit = await confirm({
    message: "Do you want to initialize a git repository?",
  });
  const projectConfig: ProjectConfig = {
    projectType: projectType as ProjectType,
    projectName,
    projectDescription,
    projectVersion,
    initializeGit,
  };
  return projectConfig;
}
