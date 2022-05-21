import { ButtonProps } from "@mui/material"

export interface IDropdownProps<T> {
    label?: string,
    options: T[],
    value: T | null,
    setValue: (value: T | null) => void
}

export interface IButton extends ButtonProps {
    label?: string,
    onClick: () => void
}