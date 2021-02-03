const firestore = firebase.firestore();

function projectSelected(id) {
    sessionStorage.setItem('projectId', id);
    window.location = 'project.html';
    return false;
}

function getProject() {
    let projectId = sessionStorage.getItem('projectId')
    get(projectId);
}

const init = () => {

    var string = ``;

    function setClass(p) {
        switch (p) {
            case "Web Development": {
                return 'project web-dev'
            }
            case "Video Game": {
                return 'project vg'
            }
            case "3D Modeling": {
                return 'project 3dm'
            }
            case "Artwork": {
                return 'project art'
            }
            default: return ''
        }
    }

    firestore.collection('projects').get().then((q) => {
        
        q.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().name}`);
            string += `<a class="${setClass(doc.data().category)}" onClick="projectSelected(${doc.id})" href='#'><img src="${doc.data().thumbnail}"></a>`;
        })

        document.getElementById("container").innerHTML = string;
    })

}

const get = (projID) => {

    let str = ``;

    firestore.collection('projects').get().then((q) => {
        q.forEach((doc) => {
            if (doc.id == projID) {
                doc.data().images.forEach(img => str += `<img class='image' src=${img}></img>`);
                str += `<div class='description'>`;
                str += `<div class='proj-title'>`;
                str += `<h1 class='proj-name'>${doc.data().name}</h1>`;
                str += `<h3 class='proj-category'>${doc.data().category}</h3>`;
                str += `</div>`;
                str += `<p>${doc.data().description}</p>`;
                str += `<div class='tools'>
                            <h3>Tools used</h3>`
                if (doc.data().tools == "Photoshop") {
                    str += `<div><img src='img/photoshop-logo.png' width='50px'></img><h5>Photoshop</h5></div>`;
                }
                str += `</div></div>`

                document.getElementById('project').innerHTML = str;
            }
        })
    });

}
