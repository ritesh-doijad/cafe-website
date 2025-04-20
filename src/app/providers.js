
"use client";

import { Provider } from "react-redux";
import store from "./redux/store";
import { Toaster } from "react-hot-toast";
import Header from "./components/Navbar";
import Footer from "./components/Footer";


export function Providers({ children }) {
  return <Provider store={store}> <Header/><Toaster position="top-right" />{children}<Footer/></Provider>;
}
