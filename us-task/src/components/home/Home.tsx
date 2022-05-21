import React from 'react'
import { Typography, useTheme } from '@mui/material';

import PageContainer from '../hoc/PageContainer';

const Home = () => {
    const theme = useTheme();

    return (
        <PageContainer>
            <Typography
                sx={{ padding: '1rem 0' }}
                align='center'
                variant='h3'
                color={theme.palette.text.primary}>
                Home
            </Typography>
        </PageContainer>
    )
}

export default Home;
