import { Provider } from "react-redux";

import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import "./styles.css";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}
