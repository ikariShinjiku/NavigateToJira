let base_url = document.getElementById("BaseUrl")
function getStorage() {
    chrome.storage.local.get(['BaseUrl'], function (url) {
        base_url.value = url.BaseUrl;
    });
}
getStorage()

