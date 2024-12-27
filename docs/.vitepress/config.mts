import { defineConfig } from 'vitepress'
import {set_sidebar} from './set_sidebar.mjs'
// import {set_nav} from './set_nav.mjs'
import {getfirstZK} from './set_sidebar.mjs'

const firstZK=getfirstZK()
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "YisuPower-lightyisu的个人博客",
  description: "blog",
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/介绍页' },{
        text:'周刊',link:firstZK
      },
      { text: 'Photos', link: '/photos' }
    ],

  
    siteTitle: 'YisuPower',
    sidebar: {'/': set_sidebar('docs/2023',0),
              '/zhoukan/':set_sidebar('docs/zhoukan',1)},  
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lightyisu/yisupower' }
    ]
  }
})
