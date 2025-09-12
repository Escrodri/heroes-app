
import { createBrowserRouter } from "react-router";
import { HomePage } from '../heroes/pages/hero/home/HomePage';
import { HeroPage } from '../heroes/pages/hero/hero/HeroPage';
import { AdminPage } from "@/admin/pages/AdminPage";
import { SearchPage } from "@/heroes/pages/hero/search/SearchPage";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { AdminLayout } from "@/admin/pages/layouts/AdminLayout";

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HeroesLayout />,
    children:[
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/heroes/1',
        element: <HeroPage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
    ]
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      }
    ]
  }
]);