var obj = JSON.parse($response.body)
if (obj.ads) obj.ads = []
$done({body: JSON.stringify(obj)})