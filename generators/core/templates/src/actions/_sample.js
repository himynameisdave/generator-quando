import AsyncDispatcher from './AsyncDispatcher';

export const fetchSampleRequest = () => ({
  type: 'FETCH_SAMPLE_REQUEST'
});

export const fetchSampleSuccess = (data) => ({
  type: 'FETCH_SAMPLE_SUCCESS',
  data
});

export const fetchSampleFailure = (err) => ({
  type: 'FETCH_SAMPLE_FAILURE',
  err
});

export const fetchSampleData = () => AsyncDispatcher(
  '/api/sample',
  fetchSampleRequest,
  fetchSampleSuccess,
  fetchSampleFailure
);
