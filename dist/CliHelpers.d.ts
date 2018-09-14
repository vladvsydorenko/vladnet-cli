export declare namespace CliHelpers {
    interface IArgvOption {
        name: string;
        type: string;
        short?: string;
        description?: string;
        example?: string;
    }
    const parseArgv: (options: IArgvOption[], argv?: string[]) => {
        [key: string]: any;
    };
}
