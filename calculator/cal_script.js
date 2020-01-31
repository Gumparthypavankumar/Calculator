// let evalu=function(string)
// {
// let a=document.getElementById('textbar');
// a.value=eval(string);
// a.style.fontWeight="bold";
// }
// let empty=function()
// {
// let a=document.getElementById('textbar');
// // var b=document.getElementById('sidebar');
// // b.style.backgroundColor="darkgray";
// a.value=" ";
// a.style.fontWeight="bold";
// }
new Vue({
el:"#container",
data:
{
    values:''
},
methods:{
evalu(string){
this.values=`${eval(string)}`;
}
}
});