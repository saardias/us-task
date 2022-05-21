
export interface IDropdownProps<T> {
    label?: string,
    options: T[],
    value: T | null,
    setValue: (value: T | null) => void
}