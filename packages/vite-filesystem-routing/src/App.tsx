import {
  createBrowserRouter,
  RouterProvider,
  LoaderFunction,
  ActionFunction,
} from 'react-router-dom';

interface IRoute {
  path: string;
  Element: JSX.Element;
  loader?: LoaderFunction;
  action?: ActionFunction;
  ErrorBoundary?: JSX.Element;
}

const pages = import.meta.glob('./pages/**/[a-z[]*.tsx', { eager: true });

const routes: IRoute[] = [];
for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];
  if (!fileName) {
    continue;
  }

  const normalizedPathName = fileName.replace(/\/index$/, '');
  const pathWithoutParams = normalizedPathName
    .replace(/\/src\/pages/, '')
    .replace(/index/, '')
    .replace(/\.tsx$/, '')
    .replace(/\[\.{3}.+\]/g, '*')
    .replace(/\[(.+?)\]/g, ':$1');

  routes.push({
    path: fileName === 'index' ? '/' : `/${pathWithoutParams}`,
    // @ts-ignore
    Element: pages[path].default,
    // @ts-ignore
    loader: pages[path]?.loader as unknown as LoaderFunction | undefined,
    // @ts-ignore
    action: pages[path]?.action as unknown as ActionFunction | undefined,
    // @ts-ignore
    ErrorBoundary: pages[path]?.ErrorBoundary as unknown as JSX.Element,
  });
}
console.log(pages);
console.log(routes);

const router = createBrowserRouter(
  routes.map(({ Element, ErrorBoundary, ...rest }) => ({
    ...rest,
    // @ts-ignore
    element: <Element />,
    // @ts-ignore
    ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
  })),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
