import Layout from '../layout/Layout'
import Main from '../views/Layout/Main'
import App from '../App'
export const RouterInfo = [
  {
    path: '/',
    element: App(),
    children: [
      {
        path: '/main',
        element: Layout(),
        label: 'Main',
        children: [
          {
            index: true,
            element: Main(),
            label: 'SubMain'
          }
        ]
      }
    ]
  }
]
