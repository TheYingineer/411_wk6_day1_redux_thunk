import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import state from "./state";
import thunk from "redux-thunk";

export default createStore(reducers, state, applyMiddleware(thunk));
// Of course, we will need an action to support this but first let's update the store to handle redux thunk.. since our action will be asynchronous. To do that, go to `redux/store.js` and import "applyMiddleware" in the appropriate spot. Google it if you don't know where it goes. Also, import `thunk` from "redux-thunk". Finally, add `applyMiddleware(thunk)` as the last argument to the `createStore` function.
