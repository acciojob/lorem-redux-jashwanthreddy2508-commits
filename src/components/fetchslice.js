import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const fetchdata = createAsyncThunk('getdata', async () => {
  const response = await fetch('https://api.lorem.com/ipsum.')
  if (!response.ok) {
    throw new Error('Response failed')
  }
  return response.json()
})

export const Fetchslice = createSlice({
  name: 'loremIpsum',

  initialState: {
    info: null,
    status: 'idle',
    error: null,
  },
  
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchdata.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchdata.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.info = action.payload
      })
      .addCase(fetchdata.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default Fetchslice.reducer
