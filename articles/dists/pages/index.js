"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      "navigationBarBackgroundColor": "#ffffff",
      "navigationBarTextStyle": "black",
      "navigationBarTitleText": "微信接口功能演示",
      "backgroundColor": "#eeeeee",
      "backgroundTextStyle": "light"
    }, _this.data = {
      imgUrls: [{
        id: 1,
        image: '../images/tooopen_sy_143912755726.jpg'
      }, {
        id: 2,
        image: '../images/tooopen_sy_175866434296.jpg'
      }, {
        id: 3,
        image: '../images/tooopen_sy_175833047715.jpg'
      }]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwiZGF0YSIsImltZ1VybHMiLCJpZCIsImltYWdlIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBR3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFFbkJDLE0sR0FBUztBQUNQLHNDQUFnQyxTQUR6QjtBQUVQLGdDQUEwQixPQUZuQjtBQUdQLGdDQUEwQixVQUhuQjtBQUlQLHlCQUFtQixTQUpaO0FBS1AsNkJBQXVCO0FBTGhCLEssUUFPVEMsSSxHQUFPO0FBQ0xDLGVBQVMsQ0FDUDtBQUNFQyxZQUFJLENBRE47QUFFRUMsZUFBTztBQUZULE9BRE8sRUFLUDtBQUNFRCxZQUFJLENBRE47QUFFRUMsZUFBTztBQUZULE9BTE8sRUFTUDtBQUNFRCxZQUFJLENBRE47QUFFRUMsZUFBTztBQUZULE9BVE87QUFESixLOzs7O0VBVDBCQyxlQUFLQyxJOztrQkFBbkJQLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcblxuICAgIGNvbmZpZyA9IHtcbiAgICAgIFwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICAgIFwibmF2aWdhdGlvbkJhclRleHRTdHlsZVwiOiBcImJsYWNrXCIsXG4gICAgICBcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjogXCLlvq7kv6HmjqXlj6Plip/og73mvJTnpLpcIixcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2VlZWVlZVwiLFxuICAgICAgXCJiYWNrZ3JvdW5kVGV4dFN0eWxlXCI6IFwibGlnaHRcIlxuICAgIH07XG4gICAgZGF0YSA9IHtcbiAgICAgIGltZ1VybHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL3Rvb29wZW5fc3lfMTQzOTEyNzU1NzI2LmpwZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL3Rvb29wZW5fc3lfMTc1ODY2NDM0Mjk2LmpwZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL3Rvb29wZW5fc3lfMTc1ODMzMDQ3NzE1LmpwZydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbiJdfQ==