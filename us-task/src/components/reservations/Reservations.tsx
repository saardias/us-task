import React, { useEffect, useState } from 'react';
import { Typography, Container, useTheme } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { addNewOrder, getMealLists } from '../../store/features/reservations/reservations-slice';
import PageContainer from '../hoc/PageContainer';
import Order from './Order';
import PrimaryButton from '../ui/Button';
import Separator from '../ui/Separator';
import { IMealLists } from '../../interfaces/models/reservation';
import LoadingIndicator from '../ui/LoadingIndicator';

const Reservations = () => {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const reservations = useAppSelector(state => state.reservations);
    const [mealLits, setMealLists] = useState<IMealLists>({ first: [], main: [], desert: [] })

    useEffect(() => {
        if (!reservations.listsLoaded) {
            dispatch(getMealLists()).then(({ payload }) => {
                if (!payload.error) {
                    setMealLists(payload.mealLists)
                }
            })
        } else {
            setMealLists(reservations.lists)
        }
    }, [dispatch, reservations.lists, reservations.listsLoaded, reservations.loading]);

    const onAddMealClicked = () => {
        dispatch(addNewOrder());
    }
    return (
        <PageContainer>
            <Container >
                <Typography
                    sx={{ padding: '1rem 0' }}
                    align='center'
                    variant='h3'
                    color={theme.palette.text.primary}>
                    Dinner Reservation
                </Typography>
                {
                    reservations.orders.map((order, index) => {
                        return (
                            <Order
                                key={order.id}
                                mealLists={mealLits}
                                reservation={order}
                                guestNumber={index + 1} />
                        )
                    })
                }
                <Separator variant={'middle'} />
                <LoadingIndicator loading={reservations.loading} />
                <Container sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '10%' }}>
                    {
                        !reservations.loading &&
                            (
                                reservations.orders.length === 0 ||
                                reservations.orders[reservations.orders.length - 1]?.ready
                            )
                            ?
                            <PrimaryButton
                                label={'Add Guest'}
                                onClick={onAddMealClicked} />
                            : null
                    }
                </Container>
            </Container>
        </PageContainer>
    )
}

export default Reservations;