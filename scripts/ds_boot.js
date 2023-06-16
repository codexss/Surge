var obj = JSON.parse($response.body)
if (obj.result) obj.result = []
$done({body: JSON.stringify(obj)})