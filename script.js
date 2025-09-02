// Add product to hidden input
function addToOrder(productName){
    document.getElementById('selectedProduct').value = productName;
    alert(productName + " added to order form.");
}

// Mock orders data (replace with real DB in future)
let orders = [
    {id:"1001", name:"Niloy", product:"Kolmi Sakh", status:"Pending"},
    {id:"1002", name:"Rafi", product:"Lal Sakh", status:"Delivered"}
];

// Track order
function trackOrder(){
    let id = document.getElementById('trackerId').value;
    let order = orders.find(o => o.id === id);
    let status = document.getElementById('orderStatus');
    if(order){
        status.innerText = `Order Status: ${order.status}`;
    } else {
        status.innerText = "Order not found!";
    }
}

// Customer Reviews
let reviews = [];
document.getElementById('reviewForm').addEventListener('submit', function(e){
    e.preventDefault();
    let name = document.getElementById('reviewer').value;
    let text = document.getElementById('reviewText').value;
    reviews.push({name,text});
    displayReviews();
    this.reset();
});

function displayReviews(){
    let reviewList = document.getElementById('reviewList');
    reviewList.innerHTML = '';
    reviews.forEach(r=>{
        let div = document.createElement('div');
        div.innerHTML = `<strong>${r.name}</strong>: ${r.text}`;
        div.style.borderBottom = "1px solid #ccc";
        div.style.padding="0.5rem 0";
        reviewList.appendChild(div);
    });
}
