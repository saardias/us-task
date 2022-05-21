import React from 'react';
import { Box, CircularProgress, styled } from '@mui/material'

const SpinnerContainer = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoadingIndicator = (props: { loading: boolean }) => {
    return (
        props.loading ?
            <SpinnerContainer >
                <CircularProgress size={'5rem'} />
            </SpinnerContainer>
            : null
    )
}

export default LoadingIndicator;