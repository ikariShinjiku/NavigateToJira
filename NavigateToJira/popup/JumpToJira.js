function openANewTabOfJira() {
    var base_url = document.getElementById("BaseUrl").value;
    var jira_id = document.getElementById("JiraID").value;
    chrome.storage.local.set({
        BaseUrl: base_url
    }, function () {
        chrome.tabs.create({ url: base_url + jira_id });
    })
}

let navigate = document.getElementById("jump");
navigate.onclick = openANewTabOfJira;

window.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("jump").click();
    }
});