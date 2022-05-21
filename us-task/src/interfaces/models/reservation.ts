export interface IMeal {
    label: string
}
export interface IResevation {
    first: IMeal | null,
    main: IMeal | null,
    desert: IMeal | null
}