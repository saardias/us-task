import Raect from 'react';
import { Button, Grid, Typography, useTheme, Container } from '@mui/material';

import Dropdown from '../ui/Dropdown';
import { IMeal, IResevation, MealType } from '../../interfaces/models/reservation';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { removeOrder, setMeal } from '../../store/features/reservations/reservations-slice';


const Order = (props: { reseration: IResevation, guestNumber: number }) => {
    const {
        reseration, guestNumber
    } = props;
    const theme = useTheme();
    const dispatch = useAppDispatch()

    const setValue = (meal: MealType, value: IMeal | null) => {
        dispatch(setMeal({
            id: reseration.id,
            meal,
            value
        }
        ));
    }
    const onRemoveClicked = () => {
        dispatch(removeOrder({
            id: reseration.id
        }
        ));
    }

    return (
        <Container sx={{ margin: '2rem 0' }}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}>
                <Grid item>
                    <Typography color={theme.palette.text.secondary}>
                        {`Geust ${guestNumber} -`}
                    </Typography>
                </Grid>
                <Grid item>
                    <Dropdown
                        label='First'
                        options={firstMeals}
                        value={reseration.first}
                        setValue={(value) => {
                            setValue('first', value)
                        }} />
                </Grid>
                {
                    reseration.first &&
                    <Grid item>
                        <Dropdown
                            label='Main'
                            options={firstMeals}
                            value={reseration.main}
                            setValue={(value) => {
                                setValue('main', value)
                            }} />
                    </Grid>
                }
                {
                    reseration.first && reseration.main &&
                    <Grid item>
                        <Dropdown
                            label='Desert'
                            options={firstMeals}
                            value={reseration.desert}
                            setValue={(value) => {
                                setValue('desert', value)
                            }} />
                    </Grid>
                }
                {
                    reseration.first && reseration.main && reseration.desert ?
                        <Grid item >
                            <Button
                                onClick={onRemoveClicked}
                                variant='contained'
                                color='error'>
                                {`Remove`}
                            </Button>
                        </Grid>
                        : null
                }
            </Grid>
        </Container>
    )
}

export default Order;

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