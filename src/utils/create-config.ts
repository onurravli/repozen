import { ProjectConfig } from "@/types/project-config";

import packageJson from "../../package.json";

import chalk from "chalk";
import { writeFile } from "fs/promises";

export async function createConfig(projectConfig: ProjectConfig) {
  const configJson = {
    repozen: {
      version: packageJson.version,
    },
    project: {
      ...projectConfig,
    },
    ...(projectConfig.projectType === "microservice" && {
      services: [],
    }),
    ...(projectConfig.projectType === "monolithic" && {
      apps: [],
    }),
    packages: [],
  };
  await writeFile("repozen.json", JSON.stringify(configJson, null, 2));
  console.log(chalk.green("\nRepozen config created successfully!"));
}
