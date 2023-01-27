let base_url = document.getElementById("BaseUrl")
function getStorage(key) {
    chrome.storage.local.get(key, function (url) {
        base_url.value = url.BaseUrl;
    });
}
getStorage(['BaseUrl'])