// var down=document.querySelector('.space .fa-angle-down');
// var up=document.querySelector('.space .fa-angle-up');
// var content =document.querySelector('.cont .space span');
// var num =parseInt(content.innerHTML);



var mytoogle = document.querySelector(".toggle-link");
var alllink =document.querySelectorAll('ul'); 
mytoogle.onclick= function(){
    var overlay = document.createElement('div');
    overlay.className="pop-over";
    document.body.appendChild(overlay);

    var content= document.createElement('div');
    content.className='content-menu';
    document.body.appendChild(content);


    var myinput = document.createElement('input');
    myinput.className="search";
    myinput.placeholder="ابحث عن المنتجات"
    content.appendChild(myinput)

    var myicon = document.createElement('i');
    myicon.className="fa-solid fa-magnifying-glass";
    content.appendChild(myicon);

    


    var title = document.createElement('span');
    var mytext = document.createTextNode("القائمه ");
    title.className="session my-active";
    title.appendChild(mytext);
    

    var title1 = document.createElement('span');
    title1.className="menu";
    var mytext1 = document.createTextNode("الاقسام ");
    title1.appendChild(mytext1);

    
    var mycontent= document.createElement('div');
    mycontent.className='my-content';
    mycontent.appendChild(title);
    mycontent.appendChild(title1);
    content.appendChild(mycontent);

   var mybutton = document.createElement('button');
   mybutton.className="my-button";
   var context = document.createTextNode('X');
   mybutton.appendChild(context);
   overlay.appendChild(mybutton);


   var menucontext= document.createElement('div');
   menucontext.className= "my-context";
    content.appendChild(menucontext);

    var ulit = document.createElement('ul')
    ulit.className="my-ulit";
    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('الرئيسيه ');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('حسابى');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('العروض');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('المفضله ');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('المجله ');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('خدمه العملاء');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('لماذا نحن');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('حول');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);
    menucontext.appendChild(ulit);
    // start list

    var listcontext= document.createElement('div');
    listcontext.className= "my-listcontext";
    content.appendChild(listcontext);

    var ulit = document.createElement('ul')
    ulit.className="my-list";
    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('التلفزيونات ');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('الاجهزه الصزتيه');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('الاجهزه الكهربائيه ');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('رياضه ');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('عالم القهوه ');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('مشاوى');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('مجوهرات ');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('ساعات يد');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);
    listcontext.appendChild(ulit);
  
}

document.addEventListener('click' , (e) =>{
   
     if(e.target.className === 'my-button'){
         document.querySelector(".pop-over").remove();
         document.querySelector(".content-menu").remove();
     }

     if(e.target.className ==="pop-over" ) {
        document.querySelector(".pop-over").remove();
        document.querySelector(".content-menu").remove();

     }  

    
    if(e.target.className ==='menu'){
        document.querySelectorAll('span').forEach(span =>{
          span.classList.remove('my-active');
                  })
        e.target.classList.add('my-active');
        document.querySelector(".my-listcontext").style.display="block";
        document.querySelector(".my-context").style.display="none";
    }

    if(e.target.className ==='session'){
        document.querySelectorAll('span').forEach(span =>{
          span.classList.remove('my-active');
                  })
        e.target.classList.add('my-active');
        document.querySelector(".my-listcontext").style.display="none";
        document.querySelector(".my-context").style.display="block";
    }

});

var btn = document.querySelector(".top button");
var fix = document.querySelector('.fixed');
var bot = document.querySelector('.bottom');

window.onscroll = function(){
    if(window.scrollY >= 600){
      btn.style.display="block";
      fix.style.display="block";
      bot.style.display="block";
    }else{
        btn.style.display="none";
        fix.style.display="none";
        bot.style.display="none";
    }
}

btn.onclick=function(){
    window.scrollTo({
        left:0,
        top:0,
    })
};

// document.querySelector('.samah').onclick =function(){
//     console.log('samah');
// }

