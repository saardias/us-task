
export interface IError {
    message: string;
    [key: string]: any;
}

export interface IBaseState {
    loading: boolean;
    error: IError | null;
}

export interface IUnique {
    id: string;
}
