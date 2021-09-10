async function getUsers() {
    let url = 'https://jsonplaceholder.typicode.com/users';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers();
    let html = '';

    users.map(user => {
        let htmlSegment = `<div class="container">
        <table class="table">
                             <img src="${user.profileURL}" >
                             <h2>${user.firstName} ${user.lastName}</h2>
                             <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                             </table>
                           </div>`;
        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();