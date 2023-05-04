import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slices/messageSlice";
import noteReducer from "./slices/NoteSlice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
export default configureStore ({
    reducer: {
        // messageReducer,
        // noteReducer,
        productReducer,
        cartReducer
    } 
}) 