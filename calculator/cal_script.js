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
this.vue=new Vue({
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
document.getElementsByTagName('body')[0].addEventListener('keypress',function(event){
		if(event.code == 'Enter'){
			var x=document.getElementById('textbar').value;
			vue.evalu(x);
		}
	});
