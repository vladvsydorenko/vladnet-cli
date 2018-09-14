import * as fs from "fs";
import * as path from "path";
import * as argvParser from "argv";
import { ICLIConfig } from "./ICLIConfig";
import { loadActions } from "./helpers";

const configPath = path.join(process.cwd(), "vladnet.json");

try {
    const config = <ICLIConfig>JSON.parse(fs.readFileSync(configPath).toString());
    const actions = loadActions(config);
    const command = process.argv[2];
    const action = actions[command];
    argvParser.option(action.options);
    const result = argvParser.run(process.argv.slice(3));
    action.run(result.options);
}
catch(err) {
    console.error(`Error reading config by path "${configPath}"`, err.stack);
}
