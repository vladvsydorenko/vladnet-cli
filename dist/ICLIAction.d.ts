import { ICLIOption } from "./ICliOption";
export interface ICliAction<T = any> {
    options: ICLIOption[];
    run: (option: T) => void;
}
