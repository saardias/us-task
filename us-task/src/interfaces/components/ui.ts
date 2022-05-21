
interface DropdownOption {
    label: string,
    [key: string]: any;
}
export interface IDropdownProps {
    options: DropdownOption[],
    value: DropdownOption | null,
    setValue: Function
}