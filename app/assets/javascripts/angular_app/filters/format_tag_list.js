/**
 * Created by dcrelling on 4/17/14.
 */
groominatiApp.filter("taglist", function () {
    return function (tagList) {
        var tags = "";
        for (var i = 0; i < tagList.length; i++) {
            tags = tags + " " + tagList[i];
        }
        return tags;
    }
});
