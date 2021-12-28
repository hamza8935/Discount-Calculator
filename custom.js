let text1 = document.getElementById('text1')
let text2 = document.getElementById('text2')
let discount = document.getElementById('discount')
let result = document.getElementById('result')
let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2')

discount.addEventListener('click',function () {
    let text11 =  text1.value;
    let text12 = text2.value;
    if (text11 === '' || text12 === "") {
        alert('value cannot be empty')
    }else{

        
 
 let discountPrice = text12/100;
 let price = text11 * discountPrice;
 let originalprice = text11 - price;
 result.innerText = `The discount of ${text12}% is ${price}.`;
 result1.innerText = `Your price after discount is ${originalprice}.`;
 result2.innerText = `You saved Rs.${price}.`;
 text1.value = '';
 text2.value = '';

}
});