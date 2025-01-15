let apps = [
    {
        title: "Example Website",
        link: "../apps/example/example.html",
        coverImg: "../apps/example/placeholder.png",
        author: "Jane Doe"
    },
    {
        title: "Pepsi's Website",
        link: "../apps/example/example.html",
        author: "Jane Doe"
    },
];

function appProperty(app) {
    return `
    <div class="">
    <a href=${app.link}>
        <ul class="gridSize">
            <div class="pageOuter">
                ${app.title}
                <div class="pageInner">
                By: ${app.author}
                </div>
            </div>
        </ul>
    </a>
    </div>
    `;
}

function appDisplay() {
    let container = document.getElementById("appContainer");
    let innerHTML = "";

    apps.forEach((app) => {
        innerHTML += appProperty(app);
     });
  
     container.innerHTML = innerHTML;

}

appDisplay();