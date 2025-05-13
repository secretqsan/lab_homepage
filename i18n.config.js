export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'zh',
  messages: {
    en: {
      homepage: 'Homepage',
      searchField: 'Search fields',
      members: "Members",
      publications: "Publications",
      joinUs: "Join Us"
    },
    zh: {
      homepage: '主页',
      searchField: '研究方向',
      members: "成员",
      publications: "代表论著",
      joinUs: "招贤纳士"
    }
  }
}))