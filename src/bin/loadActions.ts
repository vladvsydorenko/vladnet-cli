import nativeRequire from "../nativeRequire";
import { ICLIConfig } from "./ICLIConfig";
import { ICliAction } from "../ICLIAction";
import { normalizePaths } from "./normalizePaths";

export const loadActions = (config: ICLIConfig) => {
    const absoluteActionPaths = normalizePaths(config.actions);

    const actions = absoluteActionPaths.reduce((acc, actionPath, i) => {
        let loadedActions: any;

        try {
            loadedActions = nativeRequire(actionPath);
        }
        catch(err) {
            console.error(`[vladnet] Error while reading ${config.actions[i]}\n`, err.stack, "\n");
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