module.exports = {
  write: {
    platform: 'notion',

  
    notion: {
      token: process.env.NOTION_TOKEN,
      databaseId: process.env.NOTION_DATABASE_ID,
      filter: false, // {property: 'status', select: {equals: '已发布'}}
      catalog:true,
      sorts:'dateDesc'
    },
 
  },
  deploy: {
    platform: 'local',
    local: {
      outputDir: './docs',
      filename: 'title',
      format: 'markdown',
      catalog:true,
      frontMatter: {
        enable: true,
        include: [], // 只输出include包含的属性
        exclude: [], // 不输出exclude包含的属性
      },
     
    },

  },


  
}
