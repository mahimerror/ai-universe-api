const homePage = async () => {
    const url = "https://openapi.programming-hero.com/api/ai/tools";
    const res = await fetch(url);
    const data = await res.json();
    display(data.data.tools);
}
homePage();

function display(data) {
    data.forEach(element => {
        // console.log(element);
        let features="";
        element.features.forEach(elmt => {
            features+="<p>"+elmt+"</p>";
        });

        if(element.id==="06" || element.id==="11" ) return;

        const div = document.createElement("div");
        div.innerHTML = ` <div onclick="details('${element.id}')" class="card bg-base-100 shadow-xl h-full">
        <figure class="px-10 pt-10">
            <img src="${element.image}" alt="${element.name}"
                class="rounded-xl" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">Features</h2>
            <div class="features text-left">
                ${features}
            </div>

            <hr>

            <h2 class="card-title">${element.name}</h2>
            <div class="flex gap-2">
                <img src="icons/Frame.png" alt="">
                <div class="">
                    <p>${element.published_in}</p>
                </div>
            </div>
        </div>
    </div>`
    const cardContainer=document.getElementById("card-container");
    cardContainer.appendChild(div);
    });
}