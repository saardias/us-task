import Raect from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { IDropdownProps } from '../../interfaces/components/ui';

const Dropdown = <T,>(props: IDropdownProps<T>) => {
    const {
        label,
        options,
        value,
        setValue
    } = props;

    return (
        <Autocomplete
            disablePortal
            options={options}
            value={value}
            onChange={(event, value) => {
                setValue(value)
            }}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label={label || 'title'} />}
        />
    )
}

export default Dropdown;