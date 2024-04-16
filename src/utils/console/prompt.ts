import { help } from "./binaries/help";

export const availableBinaries = () => {
  return Object.keys(runBinary);
};

export const runBinary = {
  "help": {
    main: (args: string[]) => {
      return help(args);
    },
    help: "Show help for a command or general info if no command is specified",
  },
  "version": {
    main: () => {
      return document.querySelector("meta[name='version']")?.getAttribute("content") ?? "No version found";
    },
    help: "Show the current version of the website",
  },
  "addition": {
    main: (agrs: string[]) => {
      return agrs.map((arg) => parseInt(arg)).reduce((a, b) => a + b, 0).toString();
    },
    help: "Add numbers together, separated by spaces<br>",
  }
}