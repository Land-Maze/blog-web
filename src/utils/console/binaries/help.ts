import { availableBinaries, runBinary } from "../prompt";

export const help = (args: string[]) => {
  if(args.length == 0)
    return "Available commands:<br>- " + availableBinaries().join("<br>- ");
  let output = "";
  args.forEach((arg) => {
    if(runBinary[arg as keyof typeof runBinary] == undefined)
      output += `Command not found: ${arg}<br>`;
    else
      output += runBinary[arg as keyof typeof runBinary].help ?? `No help available for ${arg}` + "<br>";
  });
  return output;
};