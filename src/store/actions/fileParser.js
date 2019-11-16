import * as actionTypes from './actionTypes';

export const getSchedule = (scheduleContent) => {
    return {
        type: actionTypes.GET_SCHEDULE,
        scheduleContent: scheduleContent
    };
};