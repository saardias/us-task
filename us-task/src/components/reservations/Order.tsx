import Raect from 'react';
import { Grid, Typography, useTheme, Container } from '@mui/material';

import Dropdown from '../ui/Dropdown';
import { IMeal, IMealLists, IResevation, MealType } from '../../interfaces/models/reservation';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { removeOrder, setMeal } from '../../store/features/reservations/reservations-slice';
import PrimaryButton from '../ui/Button';

const Order = (props: { reservation: IResevation, guestNumber: number, mealLists: IMealLists }) => {
    const {
        reservation,
        guestNumber,
        mealLists
    } = props;
    const theme = useTheme();
    const dispatch = useAppDispatch()

    const setValue = (meal: MealType, value: IMeal | null) => {
        dispatch(setMeal({
            id: reservation.id,
            meal,
            value
        }
        ));
    }
    const onRemoveClicked = () => {
        dispatch(removeOrder({
            id: reservation.id
        }));
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
                        options={mealLists.first}
                        value={reservation.first}
                        setValue={(value) => {
                            setValue('first', value)
                        }} />
                </Grid>
                {
                    reservation.first &&
                    <Grid item>
                        <Dropdown
                            label='Main'
                            options={mealLists.main}
                            value={reservation.main}
                            setValue={(value) => {
                                setValue('main', value)
                            }} />
                    </Grid>
                }
                {
                    reservation.first && reservation.main &&
                    <Grid item>
                        <Dropdown
                            label='Desert'
                            options={mealLists.desert}
                            value={reservation.desert}
                            setValue={(value) => {
                                setValue('desert', value)
                            }} />
                    </Grid>
                }
                {
                    reservation.ready &&
                    <Grid item >
                        <PrimaryButton
                            onClick={onRemoveClicked}
                            label={'Remove'}
                            color={'error'} />
                    </Grid>
                }
            </Grid>
        </Container>
    )
}

export default Raect.memo(Order);