let product:Object = {
    Name: "Samsung TV",
    Price: 45600.55,
    InStock:true,
    ShippedTo:["Delhi","Hyd"],
    Qty:2,
    Total:function(){
    return this.Qty * this.Price;
    },
    Print:function(){
    console.log(`Name=${this.Name}\nPrice=${this.Price}\nInStock=${(this.InStock)==true?"Available":"Out of Stock"}\nQuantity=${this.Qty}\nShippedTo=${this.ShippedTo.toString()}\nTotal=${this.Total()}`);
    }

    }
    console.log(`--------TV Details-------`);
    product.Print();
    console.log(`-------Shoe Details-------`);
    product.Name = "Nike Casuals";
    product.Price = 2000.44;
    product.Qty = 1;
    product.ShippedTo = ["Mumbai","Chennai"];
    product.InStock = false;
    product.Print();