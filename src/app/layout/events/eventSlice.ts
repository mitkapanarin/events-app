import { createSlice } from "@reduxjs/toolkit";
import { sampleData } from "../../api/sampleData";
import { AppEvent } from "../../types/event";

type State = {
  events: AppEvent[];
};

const initialState: State = {
  events: sampleData,
};

export const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
});
