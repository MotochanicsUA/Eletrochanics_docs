import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Eletrochanics_docs/__docusaurus/debug',
    component: ComponentCreator('/Eletrochanics_docs/__docusaurus/debug', '59b'),
    exact: true
  },
  {
    path: '/Eletrochanics_docs/__docusaurus/debug/config',
    component: ComponentCreator('/Eletrochanics_docs/__docusaurus/debug/config', '81e'),
    exact: true
  },
  {
    path: '/Eletrochanics_docs/__docusaurus/debug/content',
    component: ComponentCreator('/Eletrochanics_docs/__docusaurus/debug/content', '0b3'),
    exact: true
  },
  {
    path: '/Eletrochanics_docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/Eletrochanics_docs/__docusaurus/debug/globalData', '991'),
    exact: true
  },
  {
    path: '/Eletrochanics_docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/Eletrochanics_docs/__docusaurus/debug/metadata', 'a7f'),
    exact: true
  },
  {
    path: '/Eletrochanics_docs/__docusaurus/debug/registry',
    component: ComponentCreator('/Eletrochanics_docs/__docusaurus/debug/registry', '248'),
    exact: true
  },
  {
    path: '/Eletrochanics_docs/__docusaurus/debug/routes',
    component: ComponentCreator('/Eletrochanics_docs/__docusaurus/debug/routes', 'a83'),
    exact: true
  },
  {
    path: '/Eletrochanics_docs/blog',
    component: ComponentCreator('/Eletrochanics_docs/blog', '679'),
    exact: true
  },
  {
    path: '/Eletrochanics_docs/blog/archive',
    component: ComponentCreator('/Eletrochanics_docs/blog/archive', '13d'),
    exact: true
  },
  {
    path: '/Eletrochanics_docs/blog/authors',
    component: ComponentCreator('/Eletrochanics_docs/blog/authors', 'da0'),
    exact: true
  },
  {
    path: '/Eletrochanics_docs/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/Eletrochanics_docs/blog/authors/all-sebastien-lorber-articles', '1d8'),
    exact: true
  },
  {
    path: '/Eletrochanics_docs/blog/authors/yangshun',
    component: ComponentCreator('/Eletrochanics_docs/blog/authors/yangshun', '7e6'),
    exact: true
  },
  {
    path: '/Eletrochanics_docs/blog/first-blog-post',
    component: ComponentCreator('/Eletrochanics_docs/blog/first-blog-post', '5ac'),
    exact: true
  },
  {
    path: '/Eletrochanics_docs/blog/long-blog-post',
    component: ComponentCreator('/Eletrochanics_docs/blog/long-blog-post', '834'),
    exact: true
  },
  {
    path: '/Eletrochanics_docs/blog/mdx-blog-post',
    component: ComponentCreator('/Eletrochanics_docs/blog/mdx-blog-post', '387'),
    exact: true
  },
  {
    path: '/Eletrochanics_docs/blog/tags',
    component: ComponentCreator('/Eletrochanics_docs/blog/tags', '677'),
    exact: true
  },
  {
    path: '/Eletrochanics_docs/blog/tags/docusaurus',
    component: ComponentCreator('/Eletrochanics_docs/blog/tags/docusaurus', '6a6'),
    exact: true
  },
  {
    path: '/Eletrochanics_docs/blog/tags/facebook',
    component: ComponentCreator('/Eletrochanics_docs/blog/tags/facebook', 'c57'),
    exact: true
  },
  {
    path: '/Eletrochanics_docs/blog/tags/hello',
    component: ComponentCreator('/Eletrochanics_docs/blog/tags/hello', '3b5'),
    exact: true
  },
  {
    path: '/Eletrochanics_docs/blog/tags/hola',
    component: ComponentCreator('/Eletrochanics_docs/blog/tags/hola', '8a7'),
    exact: true
  },
  {
    path: '/Eletrochanics_docs/blog/welcome',
    component: ComponentCreator('/Eletrochanics_docs/blog/welcome', '5ee'),
    exact: true
  },
  {
    path: '/Eletrochanics_docs/markdown-page',
    component: ComponentCreator('/Eletrochanics_docs/markdown-page', 'bfd'),
    exact: true
  },
  {
    path: '/Eletrochanics_docs/docs',
    component: ComponentCreator('/Eletrochanics_docs/docs', '83e'),
    routes: [
      {
        path: '/Eletrochanics_docs/docs',
        component: ComponentCreator('/Eletrochanics_docs/docs', 'b08'),
        routes: [
          {
            path: '/Eletrochanics_docs/docs',
            component: ComponentCreator('/Eletrochanics_docs/docs', 'ca3'),
            routes: [
              {
                path: '/Eletrochanics_docs/docs/category/tutorial---basics',
                component: ComponentCreator('/Eletrochanics_docs/docs/category/tutorial---basics', '73f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Eletrochanics_docs/docs/category/tutorial---extras',
                component: ComponentCreator('/Eletrochanics_docs/docs/category/tutorial---extras', '3ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Eletrochanics_docs/docs/intro',
                component: ComponentCreator('/Eletrochanics_docs/docs/intro', '359'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Eletrochanics_docs/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/Eletrochanics_docs/docs/tutorial-basics/congratulations', '7c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Eletrochanics_docs/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/Eletrochanics_docs/docs/tutorial-basics/create-a-blog-post', '854'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Eletrochanics_docs/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/Eletrochanics_docs/docs/tutorial-basics/create-a-document', '2a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Eletrochanics_docs/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/Eletrochanics_docs/docs/tutorial-basics/create-a-page', '0e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Eletrochanics_docs/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/Eletrochanics_docs/docs/tutorial-basics/deploy-your-site', '6ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Eletrochanics_docs/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/Eletrochanics_docs/docs/tutorial-basics/markdown-features', '93f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Eletrochanics_docs/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/Eletrochanics_docs/docs/tutorial-extras/manage-docs-versions', 'cc2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Eletrochanics_docs/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/Eletrochanics_docs/docs/tutorial-extras/translate-your-site', 'e05'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Eletrochanics_docs/',
    component: ComponentCreator('/Eletrochanics_docs/', 'd48'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
