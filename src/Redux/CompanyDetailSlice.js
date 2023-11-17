import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



// create action
export const createCompany = createAsyncThunk(
   "createCompany", async (data, rejectwithvalue) => {

      const response = await fetch('https://654f8ef8358230d8f0cd7b53.mockapi.io/companys', {
         method: 'POST',
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(data)
      });

      try {
         const result = await response.json();
         return result;
      }
      catch (error) {
         return rejectwithvalue(error)

      }
   }
)


// read action
export const showCompany = createAsyncThunk(
   "showCompany"
   , async (args, { rejectwithvalue }) => {
      const response = await fetch("https://654f8ef8358230d8f0cd7b53.mockapi.io/companys");
      try {
         const result = await response.json();
         console.log(result);
         return result;
      }
      catch (error) {
         return rejectwithvalue(error);
      }
   })

// delete action
export const deleteCompany = createAsyncThunk(
   "deleteCompany"
   , async (id, { rejectwithvalue }) => {
      const response = fetch(`https://654f8ef8358230d8f0cd7b53.mockapi.io/companys/${id}`, { method: "DELETE" })
      try {
         const result = await response.json();
         console.log(result);
         return result;
      }
      catch (error) {
         return rejectwithvalue(error);
      }
   });

// update company
export const updateCompany = createAsyncThunk(
   "updateCompany", async (data,{ rejectwithvalue}) => {
      console.log("updatedata", data);
      const response = await fetch(`https://654f8ef8358230d8f0cd7b53.mockapi.io/companys/${data.id}`, {
         method: 'PUT',
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(data)
      });

      try {
         const result = await response.json();
         return result;
      }
      catch (error) {
         return rejectwithvalue(error)

      }
   }
)



export const companyDetail = createSlice(
   {
      name: "companyDetail",
      initialState: {
         companys: [],
         loading: false,
         error: null,
         searchData:[],
      },
      reducers:{
         searchCompany:(state,action)=>{
            console.log(action.payload);
           state.searchData=action.payload
         },
      },

      extraReducers: {
         [createCompany.pending]: (state) => {
            state.loading = true;
         },
         [createCompany.fulfilled]: (state, action) => {
            state.loading = false;
            state.companys.push(action.payload)
         },
         [createCompany.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message
         },
         [showCompany.pending]: (state) => {
            state.loading = true;
         },
         [showCompany.fulfilled]: (state, action) => {
            state.loading = false;
            state.companys = (action.payload)
         },
         [showCompany.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
         },
         [deleteCompany.pending]: (state) => {
            state.loading = true;
         },
         [deleteCompany.fulfilled]: (state, action) => {
            state.loading = false;
            const { id } = action.payload;

            if (id) {
               state.companys = state.companys.filter((ele) => ele.id !== id)
            }

         },
         [deleteCompany.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
         },

         [updateCompany.pending]: (state) => {
            state.loading = true;
         },
         [updateCompany.fulfilled]: (state, action) => {
            state.loading = false;
            state.companys=state.companys.map((ele)=>
               ele.id===action.payload.id?action.payload:ele
            )
            console.log(updateCompany);
         },
         [updateCompany.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message
         }
      }


   }
);


export default companyDetail.reducer

export  const {searchCompany}=companyDetail.actions;