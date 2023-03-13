import { createBrowserRouter } from 'react-router-dom';
import { Companies } from '../components/companies/Companies';
import { NewCompany } from '../components/companies/NewCompany';
import { Home } from '../components/Home';
import { NewOrder } from '../components/orders/NewOrder';
import { Orders } from '../components/orders/Orders';
import { NewProduct } from '../components/products/NewProduct';
import { Products } from '../components/products/Products';
import { NewUser } from '../components/users/NewUser';
import { Users } from '../components/users/Users';

export const router = createBrowserRouter([
  {
    path: '',
    Component: Home,
    children: [
      {
        path: 'users',
        Component: Users,
        children: [
          {
            path: 'new',
            Component: NewUser,
          },
        ],
      },
      {
        path: 'companies',
        Component: Companies,
        children: [
          {
            path: 'new',
            Component: NewCompany,
          },
        ],
      },
      {
        path: 'products',
        Component: Products,
        children: [
          {
            path: 'new',
            Component: NewProduct,
          },
        ],
      },
      {
        path: 'orders',
        Component: Orders,
        children: [
          {
            path: 'new',
            Component: NewOrder,
          },
        ],
      },
    ],
  },
]);
