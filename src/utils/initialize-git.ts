import { exec } from "child_process";

export async function initializeGit(selection: boolean) {
  if (selection) {
    exec("git init -b main --quiet");
  }
}
