import Raect from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { IDropdownProps } from '../../interfaces/components/ui';

const Dropdown = (props: IDropdownProps) => {
    const {
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
            renderInput={(params) => <TextField {...params} label="First" />}
        />
    )
}

export default Dropdown;