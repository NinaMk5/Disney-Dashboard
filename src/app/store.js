import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "../features/characters/characterSlice";

export const store = configureStore({
  reducer: {
    characters: characterReducer,
  },
}); 


//Every component can access the same data.
//              Redux Store
//                  |
//         ---------------------
//        |          |        |
//        ↓          ↓        ↓
//    Table      Modal    Pie Chart

// store.js creates the central memory - central container of the application. 
// CharacterSlice is the reducer that manages the state of the characters feature. 
// The store is configured with this reducer, allowing components to access and update the character data without needing 
// to pass props down through multiple levels of the component tree.
//Instead of components passing shared data to each other (props drilling), they all read from and update one central store.