function init() {
    renderFood();
}



// function renderFood() {
//     let content = document.getElementById('content');
//     content.innerHTML = '';

//     for (let i = 0; i < food.length; i++) {
//         const foodObj = food[i];
//         const category = foodObj['category'];
//         const prices = foodObj['prices']

//         content.innerHTML += returnFood(category, i);
//         renderCategoryImage(i);

//         for (let j = 0; j < foodObj['dishes'].length; j++) {
//             const dish = foodObj['dishes'][j];
//             const price = foodObj['prices'][j];
//             content.innerHTML += returnDishes(dish, price);
//         }
//     }
// }

// ----------------------------------------------------

function returnFood(category, i) {
    return /*html*/`
        <div id="bgImg${i}" class="category-img">
            <h3>${category}</h3>
        </div>
    `;
}

// -----------------------------------------------------






// function returnDishes(dish, price) {
//     return /*html*/`
//         <div class="card">
//             <div>${dish}</div>
//             <div>${price}</div>
//         </div>
//     `;
// }

function renderCategoryImage(i) {
    let container = document.getElementById(`bgImg${i}`);
    // -> background-image: url() --> change
}