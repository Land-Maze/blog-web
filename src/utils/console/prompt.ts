export const availableBinaries = () => {
  return Object.keys(runBinary);
};

export const runBinary = {
  "help": (command: string, args: string[]) => {
    return "This is the help command";
  }
}