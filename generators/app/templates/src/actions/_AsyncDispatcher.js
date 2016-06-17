/**
  *   Uses fetch to simplify creating a simple async action dispatcher
  *
  *     endpoint [string]  - the api endpoint
  *     actionRequest [fn] - request action creator fn
  *     actionSuccess [fn] - request success action creator fn
  *     actionFailure [fn] - request failure action creator fn
  */
require('isomorphic-fetch');

const AsyncDispatcher = (
  endpoint, actionRequest, actionSuccess, actionFailure
  ) => {
  return (dispatch) => {
    dispatch(actionRequest());
    return fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        dispatch(actionSuccess(data.default));
      })
      .catch(e => {
        dispatch(actionFailure(e));
      });
  };
};

export default AsyncDispatcher;
