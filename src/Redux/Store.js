import { configureStore } from "@reduxjs/toolkit";
import  companyDetail  from "./CompanyDetailSlice";

export const store = configureStore({
  reducer: {
       app:companyDetail,
  },
});