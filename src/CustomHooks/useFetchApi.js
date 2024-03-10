import { useReducer } from 'react';
import { fetchAPI } from '../MockApi/Api';

const useFetchAPI = () => {
  const initializeTimes = () => ({ hours: ["17:00", "18:00", "19:00", "20:00"] });

  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'Error':
        throw new Error(action.error);
      default:
    //     console.log(`action value: ${action.type}`);
    //   console.log(`action value: ${action.date.value}`);
       console.log(`response: ${fetchAPI(action.date.value)}`);
        return { hours: JSON.parse(fetchAPI(action.date.value))};
        // .then(response => {
        //     return { hours: JSON.parse(response) };
        // })
        // .catch(error => {
        //   dispatch({ type: 'Error', error: error.message });
        // });
      break;
    }
  };

  const [aviableHours, dispatch] = useReducer(updateTimes, null, initializeTimes);

  return [aviableHours, dispatch];
};

export default useFetchAPI;