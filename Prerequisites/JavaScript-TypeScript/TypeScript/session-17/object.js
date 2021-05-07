var product = {
    Name: "Samsung TV",
    Price: 45600.55,
    InStock: true,
    ShippedTo: ["Delhi", "Hyd"],
    Qty: 2,
    Total: function () {
        return this.Qty * this.Price;
    },
    Print: function () {
        console.log("Name=" + this.Name + "\nPrice=" + this.Price + "\nInStock=" + ((this.InStock) == true ? "Available" : "Out of Stock") + "\nQuantity=" + this.Qty + "\nShippedTo=" + this.ShippedTo.toString() + "\nTotal=" + this.Total());
    }
};
console.log("--------TV Details-------");
product.Print();
