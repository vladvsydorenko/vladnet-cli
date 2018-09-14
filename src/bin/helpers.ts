import * as fs from "fs";
import * as path from "path";
import { ICLIConfig } from "./ICLIConfig";
import nativeRequire from "../nativeRequire";
import { ICliAction } from "../ICLIAction";

export const normalizeActionPaths = (paths: string[]) => {
    return paths.map(value => {
        if (value.charAt(0) === ".") value = path.join(process.cwd(), value);
        return value;
    });
};

export const loadActions = (config: ICLIConfig) => {
    const absoluteActionPaths = normalizeActionPaths(config.actions);

    const actions = absoluteActionPaths.reduce((acc, actionPath, i) => {
        let loadedActions: any;

        try {
            loadedActions = nativeRequire(actionPath);
        }
        catch(err) {
            console.error(`[vladnet] Error while reading ${config.actions[i]}`, err.stack);
        }

        if (loadActions) {
            Object
                .keys(loadedActions.actions)
                .forEach(key => {
                    acc[key] = loadedActions.actions[key];
                });
        }

        return acc;
    }, {} as { [key: string]: ICliAction });

    return actions;
}
