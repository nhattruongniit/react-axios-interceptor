
// actions
import { setLoading } from '../reducers/app.reducer';

import { httpInstance } from './httpRequest';

export const applicationInit = () => async (dispatch, getState) => {
  console.log('state: ', getState())
  let requestCount = 0;
  function decreaseRequestCount() {
    requestCount--;
    if (requestCount === 0) {
      dispatch(setLoading(false));
    }
  }

  httpInstance.interceptors.request.use(
    (config) => {
      console.log('interceptor request config: ', config)
      if (config.showSpinner) {
        requestCount++;
        dispatch(setLoading(true));
      }
      return config;
    },
    (error) => {
      if (error.config.showSpinner) {
        decreaseRequestCount();
      }
      return Promise.reject(error);
    },
  );
  
  httpInstance.interceptors.response.use(
    (res) => {
      console.log('interceptor response request: ', res)
      if (res.config.showSpinner) {
        decreaseRequestCount();
      }
      return res;
    },
    (error) => {
      if (error.config.showSpinner) {
        decreaseRequestCount();
      }

      return Promise.reject(error);
    },
  );
  
}
