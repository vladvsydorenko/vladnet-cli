import * as argvParser from "argv";

export namespace CliHelpers {

    export interface IArgvOption {
        name: string;
        type: string;
        short?: string;
        description?: string;
        example?: string;
    }

    export const parseArgv = (options: IArgvOption[], argv = process.argv) => {
        argvParser.option(options);
        return argvParser.run(argv).options;
    };

}
