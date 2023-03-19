var productName = document.getElementById("name")
var price = document.getElementById("price")
var cate = document.getElementById("cate")
var desc = document.getElementById("desc")
var count = document.getElementById("count")
var tBody = document.getElementById("tBody")
var totalPrice = document.getElementById("totalPrice")
var drop = document.getElementById("drop")
var productList = [];
if (localStorage.getItem("one") != null) {
    productList = JSON.parse(localStorage.getItem("one"))
    display()
}
else {
    var productList = []
}
// var productList = JSON.parse(localStorage.getItem("one"))
// The add btn
function list() {
    var product = {
        Pname: productName.value,
        Pprice: price.value,
        Pcate: cate.value,
        Pdesc: desc.value,
        Pcount: count.value
    }

    

    if (productName.value != "" && price.value != "" && cate.value != "" && desc.value != "") {
        for (var i = 1  ; i <= product.Pcount; i++) {

            productList.push(product)
            localStorage.setItem("one", JSON.stringify(productList))
            // productList = JSON.parse(localStorage.getItem("one"))
        }
    }
    else {

    }


    totalprice()
    clear()
    display()

}


// the display of row after clicking add
function display() {
    var container = ""
    for (var i = 0; i < productList.length; i++) {
        container += `<tr>
                            <td>${productList[i].Pname}</td>
                            <td>${productList[i].Pprice}</td>
                            <td>${productList[i].Pcate}</td>
                            <td>${productList[i].Pdesc}</td>
                            <td><button class="btn btn-danger  text-light " onclick="deleteitem(${i})">Delete</button>
                            </td>
                            <td><button class="btn btn-info  text-light " onclick="editItem(${i})">Edit</button>
                            </td>
                            <td>${productList[i].Pcount}</td>
                           
                            </tr>`


    }
    tBody.innerHTML = container
    totalprice()


}
// Delete one item Button 
function deleteitem(i) {
    productList.splice(i, 1)
    localStorage.setItem("one", JSON.stringify(productList))

    display()
}
// Delete all items Button
function deleteall() {
    productList.splice(0);
    localStorage.setItem("one", JSON.stringify(productList))

    display()
}
// clear the iputs after clicking
function clear() {
    productName.value = ""
    price.value = ""
    cate.value = ""
    desc.value = ""
    count.value = ""
}
// Edit btn
function editItem(i) {
    productName.value = productList[i].Pname
    price.value = productList[i].Pprice
    cate.value = productList[i].Pcate
    desc.value = productList[i].Pdesc
    count.value = 1 +
        productList.splice(i, 1)
    localStorage.setItem("one", JSON.stringify(productList))

    display()
}
//  the total price btn
function totalprice() {


        const calculate_sum = productList.reduce((prev, next) => {
            return prev + next.Pprice * 1
        }, 0)
        totalPrice.innerHTML = calculate_sum
    }





// }
// the group btn 
function group(i) {

    for (var i = 1; i <= product.Pcount; i++) {
        display()
    }
}
