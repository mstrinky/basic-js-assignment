const products = [
    {id:1, name:'iphone', price:30000},
    {id:2, name:'xomi Phone', price:20000},
    {id:3, name:'laptop', price:40000},
]

// for (product of products){
//     console.log(product);
// } 

function matchProducts(products , search){
    const matched = [];
    for(product of products){
      if(product.name.toLowerCase().includes(search)){
        matched.push(product);
      }
    }
    return matched;
}

const result = matchProducts(products,'phone');
console.log(result);