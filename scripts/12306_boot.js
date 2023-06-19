let rst;
var obj = JSON.parse($request.body);
if (obj.placementNo === "0007") {
    rst = '{"materialsList":[{"billMaterialsId":"255","filePath":"h","creativeType":1}],"advertParam":{"skipTime":1}}';
} else if (obj.placementNo === "G0054") {
    rst = '{"code":"00","materialsList":[{}]}';
} else {
    rst = '{"code":"00","message":"无广告返回"}';
}
$done({body: rst})
