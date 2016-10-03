/**
 * @description Javascript 公用函式庫版本建立
 * @author Eason
 * @since 20160602
 * @version 1
 * 
 * @description watch 函式增加判斷是否有 console 物件才執行 (預防 IE8、9發生錯誤)
 * @author Eason
 * @since 20161003
 * @version 2
 */

//XML物件轉字串
var xmlToString = function (xmlObject) {
    var xmlString;
    if (window.ActiveXObject) { // for IE
        xmlString = xmlObject.xml;
        if (!xmlString) {       //for IE9
            xmlString = (new XMLSerializer()).serializeToString(xmlObject);
        }
    } else {
        xmlString = (new XMLSerializer()).serializeToString(xmlObject);
    }
    return xmlString;
}

//強制關閉視窗
var windowClose = function () {
    window.open('', '_self');
    window.close();
}

//取得網站主機名稱
var getWebsiteDomain = function () {
    return top.window.location.protocol + '//' + top.window.location.host;
}

//轉址到第一層根目錄(會保留前一頁的歷史紀錄)
var redirectToRoot = function () {
    top.window.location.href = top.window.location.protocol + '//' + top.window.location.host;
}

//轉址到第一層根目錄(不會保留前一頁的歷史紀錄)
var redirectReplaceToRoot = function () {
    top.window.location.replace(top.window.location.protocol + '//' + top.window.location.host);
}

//利用UserAgent來判斷是否為行動裝置
var isMobileDevice = function () {
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4));
}

//檢測IE版本
var detectIEVersion = function (ver) {
    return navigator.appVersion.indexOf('MSIE ' + ver + '.') > -1;
}

//檢視主控台自訂的除錯記錄
//可傳入要查看的物件或使用格式字元傳入多參數(格式字元, 參數)
var watch = function () {
    if(window.console){
        if (arguments.length > 1) {
            console.debug.apply(console, arguments);
        } else {
            console.debug(arguments[0]);
        }
    }
}

//檢測傳入的物件是否存在並且判斷長度是否大於0或等於傳入物件
var detectObjAndLength = function (obj, content) {
    if (obj) {
        if (content) {
            return (obj == content);
        } else {
            return (obj.length > 0);
        }
    }
    return false;
}

//Line分享資訊至手機
//shareText：要分享的文字
//useOpen：是否使用另開視窗
var lineShare = function (shareText, useOpen) {
    var url = 'http://line.me/R/msg/text/?' + lineShare;
    if (useOpen) {
        top.window.open(url);
    } else {
        top.window.location.href = url;
    }
}

//監聽輸入按鍵是否為數字鍵
var isNumberKeyCode = function (e) {
    if (!((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105) ||
        (e.keyCode == 8) || (e.keyCode >= 37 && e.keyCode <= 40))) {
        return false;
    }
    return true;
}
