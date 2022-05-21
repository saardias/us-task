import React, { useState } from 'react';
import { Typography, Container, useTheme, Divider, Button } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { addNewOrder } from '../../store/features/reservations/reservations-slice';
import PageContainer from '../hoc/PageContainer';
import Order from './Order';

const Reservations = () => {
    const theme = useTheme();
    const dispatch = useAppDispatch()
    const reservations = useAppSelector(state => state.reservations)

    const onAddMealClicked = () => {
        dispatch(addNewOrder());
    }
    return (
        <PageContainer>
            <Container >
                <Typography align='center' variant='h3' color={theme.palette.text.primary}>
                    Dinner Reservation
                </Typography>
                <Divider variant={'middle'} />
                {
                    reservations.orders.map((order, index) => {
                        return (
                            <Order
                                key={order.id}
                                reseration={order}
                                guestNumber={index + 1} />
                        )
                    })
                }

                {
                    reservations.orders.length === 0 ||
                        (
                            reservations.orders[reservations.orders.length - 1] &&
                            reservations.orders[reservations.orders.length - 1].first &&
                            reservations.orders[reservations.orders.length - 1].main &&
                            reservations.orders[reservations.orders.length - 1].desert
                        ) ?
                        <Button onClick={onAddMealClicked}>
                            Add Meal
                        </Button>
                        : null
                }

            </Container>
        </PageContainer>
    )
}

export default Reservations;