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

  const [aviableHours, dispatch] = useReducer(updateTimes, {hours: ["17.00"]});

  return [aviableHours, dispatch];
};

export default useFetchAPI;