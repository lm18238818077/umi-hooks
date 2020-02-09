import { IConfig } from 'umi-types';
import { resolve } from "path";
// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/table', component: '../pages/table/class' },
        { path: '/table/hooks', component: '../pages/table/umi-hook' },
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'umi-hooks',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      alias: {
        "@": resolve(__dirname, "./src"),
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
