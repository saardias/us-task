import React from 'react';
import { Button } from '@mui/material';
import { IButton } from '../../interfaces/components/ui';

const PrimaryButton = (props: IButton) => {
    const {
        label,
        onClick,
        size,
        color
    } = props
    return (
        <Button
            {...props}
            size={size || 'large'}
            onClick={onClick}
            variant={'contained'}
            color={color || 'primary'}>
            {label || 'Click'}
        </Button>
    )
}

export default PrimaryButton;