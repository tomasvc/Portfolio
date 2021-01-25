function getProject() {
    let projectId = sessionStorage.getItem('projectId')

    init(projectId);
}

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

const init = (id) => {
    let str = ``;
    loadJSON((response) => {
        let json = JSON.parse(response);
        let proj = json.projects[id];
        //str += `<div id='shade'></div>`;
        
        proj.images.forEach(img => str += `<img class='image' src=${img}></img>`);
        str += `<div class='description'>`;
        str += `<div class='proj-title'>`;
        str += `<h1 class='proj-name'>${proj.name}</h1>`;
        str += `<h3 class='proj-category'>${proj.category}</h3>`;
        str += `</div>`;
        str += `<p>${proj.description}</p>`;
        str += `<div class='tools'>
                    <h3>Tools used</h3>`
        if (proj.tools == "Photoshop") {
            str += `<img src='img/photoshop-logo.png' width='50px'></img><h5>Photoshop</h5>`;
        }
        str += `</div></div>`

        document.getElementById('project').innerHTML = str;

        //document.getElementById('bg-image').style.backgroundImage = 'url(' + proj.images[0] + ')';
        //document.getElementById('bg-image').style.filter = 'blur(2px)';
    });
    
}


