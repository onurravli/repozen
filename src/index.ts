#!/usr/bin/env node

import { banner } from "./utils/banner";
import { checkForRepozen } from "./utils/check-for-repozen";
import { createConfig } from "./utils/create-config";
import { getConfig } from "./utils/get-config";
import { initializeGit } from "./utils/initialize-git";

const main = async () => {
  await checkForRepozen();
  banner();
  const projectConfig = await getConfig();
  await createConfig(projectConfig);
  await initializeGit(projectConfig.initializeGit);
};

main();
