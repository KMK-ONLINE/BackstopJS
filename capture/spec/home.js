{
  "label": "Home Page",
  "url": "http://vidio.dev:3000",
  "captures": [
    {
      "selectors": [".site-header"]
    },
    {
      "before_capture": {
        "action": "hover",
        "selector": ".login_button"
      },
      "selectors": [".site-header"]
    },
    {
      "before_capture": {
        "action": "mouseover",
        "selector": ".sidebar__menu-row--collapsible:nth(0) > a"
      },
      "selectors": [
        {
          "top": 0,
          "left": 0,
          "width": 590,
          "height": 800
        }
      ]
    }
  ],
  "selectors": ["body"],
  "misMatchThreshold" : 1.0
}
