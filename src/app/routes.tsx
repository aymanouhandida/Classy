import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { About } from "./pages/About";
import { Lookbook } from "./pages/Lookbook";
import { Contact } from "./pages/Contact";
import { Cart } from "./pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "about", Component: About },
      { path: "lookbook", Component: Lookbook },
      { path: "contact", Component: Contact },
      { path: "cart", Component: Cart },
    ],
  },
]);
