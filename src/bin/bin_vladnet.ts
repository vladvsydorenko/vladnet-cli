import * as fs from "fs";
import * as path from "path";
import * as argvParser from "argv";
import { ICLIConfig } from "./ICLIConfig";
import { loadActions } from "./loadActions";

const configPath = path.join(process.cwd(), "vladnet.json");

const read = () => {
    try {
        const config = <ICLIConfig>JSON.parse(fs.readFileSync(configPath).toString());
        const actions = loadActions(config);
        const command = process.argv[2];

        if (!command) {
            console.error(`No action name passed`);
            return;
        }

        const action = actions[command];

        if (!action) {
            console.error(`Action "${command}" not found`);
            return;
        }

        if (!Array.isArray(action.options) || typeof action.run !== "function") {
            console.error(`Loaded action "${command}" has wrong type, should have "options" and "run"`);
            return;
        }

        argvParser.option(action.options);
        const result = argvParser.run(process.argv.slice(3));
        action.run(result.options);
    }
    catch(err) {
        console.error(`Error reading config by path "${configPath}"`, err.stack);
    }
}

read();
