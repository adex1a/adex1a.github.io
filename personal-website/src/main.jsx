import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route errorElement={<NotFound />} element={<App />}>
//       <Route path="/" element={<App />} />
//       {/* <Route path="/profile" element={<Profile />} /> */}
//     </Route>
//   )
// );

// renders React Component "Root" into the DOM element with ID "root"
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
