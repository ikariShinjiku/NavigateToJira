function openANewTabOfJira() {
    var base_url = document.getElementById("BaseUrl").value;
    var jira_id = document.getElementById("JiraID").value;

    var Days = 400;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);

    chrome.storage.local.set({
        BaseUrl: base_url
    }, function () {
        chrome.tabs.create({ url: base_url + jira_id });
    })
}

let navigate = document.getElementById("jump");
navigate.onclick = openANewTabOfJira;