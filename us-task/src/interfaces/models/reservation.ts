import { IUnique } from './../base';

export type MealType = 'first' | 'main' | 'desert';
export interface IMeal {
    label: string
}
export interface IResevation extends IUnique {
    first: IMeal | null,
    main: IMeal | null,
    desert: IMeal | null,
    ready: boolean
}

export interface IMealLists {
    first: IMeal[];
    main: IMeal[];
    desert: IMeal[];
}