var products=[
	{img:'07.jpg',title:'番茄牛腩面'},
	{img:'08.jpg',title:'蒜泥白肉'},
	{img:'09.jpg',title:'酱香带鱼'},
	{img:'10.jpg',title:'家常烧鱿鱼'},
	{img:'11.jpg',title:'饺子皮锅巴'},
	{img:'12.jpg',title:'凉拌黄瓜皮蛋'},
	{img:'13.jpg',title:'黄豆烧五花肉'},
	{img:'14.jpg',title:'爆炒脆鱼肠'},
	{img:'15.jpg',title:'鼓汁猪颈肉'},
	{img:'16.jpg',title:'烧烤味杏鲍菇'},
	{img:'17.jpg',title:'薯塔薯条'},
	{img:'18.jpg',title:'凉拌猪肝'},
	{img:'19.jpg',title:'三姆牛肉卷'},
	{img:'20.jpg',title:'鱼片羹'},
	{img:'21.jpg',title:'鸡肉小炒'},
	{img:'22.jpg',title:'豆角焖面'},
]
var str=''
products.forEach((item,index)=>{
	str+=`<li><a href="#"><img src="images/home/${item.img}" alt=""><p>${item.title}</p></a></li>`
})
var ProductsList = document.getElementById('ProductsList')
console.log(ProductsList,str)
ProductsList.innerHTML=str