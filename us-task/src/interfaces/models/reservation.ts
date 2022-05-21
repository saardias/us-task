import { IUnique } from './../base';

export type MealType = 'first' | 'main' | 'desert';
export interface IMeal {
    label: string
}
export interface IResevation extends IUnique {
    first: IMeal | null,
    main: IMeal | null,
    desert: IMeal | null
}

export interface IOrder {
    reservations: IResevation[];
}