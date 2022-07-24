import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const HomeRoutes = [
  {
    path: null,
    child: <Home />
  },
  {
    path: "user_management",
    child: <UserManagement />
  },
  {
    path: "setting",
    child: <Setting />
  },
  {
    path: "*",
    child: <Page404 />
  }
];
