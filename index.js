//产品详情
var gulidMenuList = [
	{	name: '新秀菜谱'},
	{	name: '一周热门'},
	{	name: '最受欢迎的家常菜'},
]
console.log(($))
var gulidStr = ''
gulidMenuList.forEach((menu,i)=>{
	gulidStr += `<a href="#" key=${i} class="${i===0?'select':''}" onClick='toggleMeun(${i})'>${menu.name}</a>`
})
$('#GulidTitle').html(gulidStr)
$('#GulidTitle').find('a').on('click',toggleMeun)
function toggleMeun(e,i){
	console.log(e)
	var target = e.target
	$('#GulidTitle a').removeClass('select');
	$('#GulidTitle a').eq(i).addClass('select')
}

var products=[
	{img:'paigu.jpg',title:'红烧排骨'},
	{img:'1_2.jpg',title:'蒜泥白肉'},
	{img:'1_3.jpg',title:'酱香带鱼'},
	{img:'1_4.jpg',title:'家常烧鱿鱼'},
	{img:'1_1.jpg',title:'饺子皮锅巴'},
	{img:'1_2.jpg',title:'凉拌黄瓜皮蛋'},
	{img:'1_3.jpg',title:'黄豆烧五花肉'},
	{img:'1_4.jpg',title:'爆炒脆鱼肠'},
	{img:'1_1.jpg',title:'鼓汁猪颈肉'},
	{img:'1_2.jpg',title:'烧烤味杏鲍菇'},
	{img:'1_3.jpg',title:'薯塔薯条'},
	{img:'1_4.jpg',title:'凉拌猪肝'},
	{img:'1_1.jpg',title:'三姆牛肉卷'},
	{img:'1_2.jpg',title:'鱼片羹'},
	{img:'1_3.jpg',title:'鸡肉小炒'},
	{img:'1_4.jpg',title:'豆角焖面'},
]
var str=''
products.forEach((item,index)=>{
	str+=`<li><a href="#"><img src="images/main/${item.img}" alt=""><p>${item.title}</p></a></li>`
})
var ProductsList = document.getElementById('ProductsList')
ProductsList.innerHTML=str
// 食材
var summary=[
	{img:'caomei.jpg',title:'草莓'},
	{img:'chunsun.jpg',title:'春笋'},
	{img:'douya.jpg',title:'豆芽'},
	{img:'guiyu.jpg',title:'鳜鱼'},
	{img:'jicai.jpg',title:'荠菜'},
	{img:'jichi.jpg',title:'鸡翅'},
	{img:'jiucai.jpg',title:'韭菜'},
	{img:'jiyu.jpg',title:'鲫鱼'},
	{img:'shanyao.jpg',title:'山药'},
	{img:'shenghao.jpg',title:'生蚝'},
	{img:'paigu.jpg',title:'排骨'},
	{img:'wosun.jpg',title:'莴笋'},
	{img:'zhugan.jpg',title:'猪肝'},
	{img:'zhuliji.jpg',title:'猪里脊'},
]
var str1=''
summary.forEach((item,index)=>{
	str1+=`<li><a href="#"><img src="images/main/${item.img}" alt=""><p>${item.title}</p></a></li>`
})
var Summarylist = document.getElementById('Summarylist')
Summarylist.innerHTML=str1

