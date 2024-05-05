import { defineConfig } from 'vitepress'
import {set_sidebar} from './set_sidebar.mjs'
import {set_nav} from './set_nav.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "YisuPower",
  description: "blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/介绍页' },{
        text:'周刊',link:'/zhoukan/'+set_nav('docs/zhoukan')
      }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' },
    //       {text:'2024',link:'/jk'}
    //     ]
    //   }
    // ],
    siteTitle: 'YisuPower',
    sidebar: {'/': set_sidebar('docs'),
              '/zhoukan/':set_sidebar('docs/zhoukan',1)},  
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lightyisu/yisupower' }
    ]
  }
})
