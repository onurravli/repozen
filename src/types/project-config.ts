import { ProjectType } from "../types/project-type";

export interface ProjectConfig {
  projectType: ProjectType;
  projectName: string;
  projectDescription: string;
  projectVersion: string;
  initializeGit: boolean;
}
