import { ICLIConfig } from "./ICLIConfig";
import { ICliAction } from "../ICLIAction";
export declare const normalizeActionPaths: (paths: string[]) => string[];
export declare const loadActions: (config: ICLIConfig) => {
    [key: string]: ICliAction<any>;
};
