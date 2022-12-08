import { createAsyncThunk } from '@reduxjs/toolkit';

const getGreeting = createAsyncThunk('greeting/getGreeting', async () => {
  const response = await fetch('/api/v1/greetings');
  const data = await response.json();
  console.log(data);
  return data;
});

export default getGreeting;
