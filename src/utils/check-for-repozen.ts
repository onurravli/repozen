import { existsSync } from "fs";

export async function checkForRepozen() {
  if (existsSync("repozen.json")) {
    throw new Error("Repozen config already exists");
  }
}
