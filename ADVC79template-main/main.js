menu_list_array = ["Veg Margherita Pizza", "Spicy Chicken", "Pepironi Pizza", "Vegan Pizza", "Peri-Peri Pizza", "Indian Pizza", "Tandoori Pizza"];

function getmenu(){
var htmldata;
for(var i=0; i<menu_list_array.length;i++){
    document.getElementById("display_menu").innerHTML+=(i+1)+". "+menu_list_array[i]+"<br>"
}
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.push(item)
document.getElementById("display_menu").innerHTML=menu_list_array

}

function add_top(){
//Complete the code
}