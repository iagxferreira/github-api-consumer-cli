import { Command } from "commander";

export const handleOptions = (command: Command) => {
  const opt = command.opts()
  // TODO: handle options
};

export const parse = (command: Command) => command.parse();

export const init = (command: Command) =>
  command
    .name("github-consumer-cli")
    .description(
      "Consume your user infos from Github API and cache it into a database"
    )
    .version("0.1.0");

export const options = (command: Command) =>
  command.option("-u, --user [value]", "search for user");

export const runCli = async () => {
  const program = new Command()
  init(program);
  options(program);
  parse(program);
  handleOptions(program);
};
