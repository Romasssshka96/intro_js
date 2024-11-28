fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(console.log);






fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then((objectOfCarts) => {
        let {carts} = objectOfCarts;
        for (let cart of carts){
            let block = document.createElement("div")
            block.innerText = `
                id: ${cart.id}, 
                total; ${cart.total}, 
                discountedTotal: ${cart.discountedTotal}, 
                userId: ${cart.userId}
            `;

            let hr = document.createElement("hr")




            let ul = document.createElement("ul")
            for (let product of cart.products){
                let li = document.createElement("li")
                li.innerText = `
                    discountPercentage: ${product.discountPercentage},
                    discountedTotal: ${product.discountedTotal},
                    id: ${product.id},
                    price: ${product.price},
                    quantity: ${product.quantity},
                    title: ${product.title},
                    total: ${product.total},
                `
                let img = document.createElement("img")
                img.src = product.thumbnail;
                li.appendChild(img)

                ul.appendChild(li)


                document.body.append(block, ul, hr)
            }
        }


    });






/*        for (let item in carts){
              if(Array.isArray(item)){
                  for (let unit of item ){
                      let block = document.createElement("div")
                      block.innerText = item;
                      document.body.append(block)
                  }
              }


            }
        }*/
