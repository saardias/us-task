import React, { useState } from 'react';
import { Typography, Container, useTheme, Divider } from '@mui/material';

import Dropdown from '../ui/Dropdown';
import PageContainer from '../hoc/PageContainer';
import { IMeal } from '../../interfaces/models/reservation';

const Reservations = () => {
    const [meal, setMeal] = useState<IMeal | null>(null);
    const theme = useTheme();

    return (
        <PageContainer>
            <Container >
                <Typography align='center' variant='h3' color={theme.palette.text.primary}>
                    Dinner Reservation
                </Typography>
                <Divider variant={'middle'} />

                {/* <Dropdown
                    options={firstMeals}
                    value={meal}
                    setValue={setMeal}
                /> */}

            </Container>
        </PageContainer>
    )
}

export default Reservations;

const firstMeals = [
    { label: 'Green salad' },
    { label: 'Soup' },
    { label: 'Crispy Garlic Dip' },
    { label: 'Sausage Balls' },
    { label: 'Bagel-Spiced Cheese Puffs' },
    { label: 'Baked Vegetable Egg Rolls' },
    { label: 'Stuffed Grape Leaves' },
    { label: 'Mushroom Puffs' },
    { label: 'Curly Fries' },
    { label: 'Carnitas Egg Rolls' },
    { label: 'Coconut Curry Puffs' },
    { label: 'Tzatziki Sauce' },
    { label: 'Reggiano Cups' },
    { label: 'Crab Cakesup' }
];