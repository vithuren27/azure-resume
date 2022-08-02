window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApiUrl = 'https://getresumecounter3.azurewebsites.net/api/GetResumeCounter?code=FMS3qenrfrmMZi-3ggV7I3Iuux4oa6CgWxpCF05zNnoeAzFuT5KCrw=='
const localApi = 'http://localhost:7071/api/GetResumeCounter';

function getVisitCount() {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json();
    }).then(response => {
            console.log("Website called function API.");
            count = response.count;
            document.getElementById('counter').innerText = count;
        }).catch(function(error){
            console.log(error);
        });
    return count;
}
