import { useReducer } from 'react';
import { fetchAPI } from '../MockApi/Api';

const useFetchAPI = () => {
  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'Error':
        throw new Error(action.error);
      default:
        return { hours: JSON.parse(fetchAPI(action.date.value))};
    }
  };

  const initializeTimes = { hours: JSON.parse(fetchAPI(new Date()))};

  const [aviableHours, dispatch] = useReducer(updateTimes, initializeTimes);

  return [aviableHours, dispatch];
};

export default useFetchAPI;