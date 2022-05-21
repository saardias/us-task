import { IResevation } from './../interfaces/models/reservation';
import { v4 as uuidv4 } from 'uuid';


export const getId = () => {
    return uuidv4();
};

export const getNewOreder = (): IResevation => {
    return {
        id: getId(),
        first: null,
        main: null,
        desert: null,
        ready: false
    }
}