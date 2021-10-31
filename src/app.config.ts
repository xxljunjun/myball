export default {
  pages: [
    'pages/index/index',
    'pages/practice/practice',
    'pages/mine/mine',
   
  ],
  tabBar: {
    // color: "#7A7E83",
		// electedColor: "#a7d500",
		// borderStyle: "black",
		// backgroundColor: "#ffffff",
		// iconWidth: "10px",
		// fontSize: "40px",
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: "static/tab/home.png",
				selectedIconPath: "static/tab/home-s.png",
        text: "探索"
      }
      , {
        pagePath: 'pages/practice/practice',
        iconPath: "static/tab/drunk.png",
        selectedIconPath: "static/tab/drunk-s.png",
        text: "练习"
      },
      {
        pagePath: 'pages/mine/mine',
        iconPath: "static/tab/mine.png",
        selectedIconPath: "static/tab/mine-s.png",
        text: "我的"
      },
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
