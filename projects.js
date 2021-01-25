const loadJSON = (callback) => {
    let data = new XMLHttpRequest();
    data.overrideMimeType("application/json");
    data.open('GET', 'projects.json', true);
    data.onreadystatechange = () => {
        if (data.readyState === 4 && data.status === 200) {
            callback(data.responseText);
        }
    }
    data.send(null)
}

const init = () => {
    loadJSON((response) => {
        let json = JSON.parse(response);
        let string = ``

        for (let i = 0; i < json.projects.length; i++) {
            string += `<a onClick="projectSelected(${json.projects[i].id})" href='#'><img src="${json.projects[i].thumbnail}"></a>`;
        }
        document.getElementById("container").innerHTML = string;
    })
}

function projectSelected(id) {
    sessionStorage.setItem('projectId', id);
    window.location = 'project.html';
    return false;
}