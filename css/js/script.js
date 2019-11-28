function product(pid,name,price){
    this.pid=pid
    this.Name=name
    this.price=price
    this.incprice=function(amount){
        this.price=this.price+amount
        console.log("price",this.price)
    }
    

}
function getvalues(){
var pid=document.getElementById('pid').value
var name=document.getElementById('name').value
var price=document.getElementById('price').value
var p=new product(pid,name,price)
alert(p.pid+" "+p.price+" "+p.name)
}