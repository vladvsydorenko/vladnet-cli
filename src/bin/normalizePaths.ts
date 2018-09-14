import * as path from "path";

export const normalizePaths = (paths: string[]) => {
    return paths.map(value => {
        if (value.charAt(0) === ".") value = path.join(process.cwd(), value);
        return value;
    });
};
