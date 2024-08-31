import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchFiles = () => async (dispatch) => {
  dispatch(fetchFilesStart())
  try {
    const response = await axios.get(`http://localhost:${process.env.PORT || 4000}/api/v1/files/data`)
    dispatch(filesFetched(response.data))
  } catch (error) {
    console.error('Failed to fetch files:', error)
    dispatch(fetchFilesFailed(`Failed to fetch /api/v1/files/data ${error.message}`))
  }
}

const filesSlice = createSlice({
  name: 'files',
  initialState: {
    files: null,
    loading: false,
    error: null
  },
  reducers: {
    fetchFilesStart: (state) => {
      state.loading = true
      state.error = null
    },
    filesFetched: (state, action) => {
      state.files = action.payload
      state.loading = false
    },
    fetchFilesFailed: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const { fetchFilesStart, filesFetched, fetchFilesFailed } = filesSlice.actions
export default filesSlice.reducer
