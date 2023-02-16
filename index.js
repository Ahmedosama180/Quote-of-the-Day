var nameaothour = document.getElementById("author");
var contarticl = document.getElementById("aricl");
var add=document.querySelector('#but')

contlist = [
    {
     qoute: "“Be yourself; everyone else is already taken.”",
      name: "Oscar Wilde",
      
    },
    {

      qoute:
        "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
      name: "― Marilyn Monroe",
    },
    {
 
      qoute:
        "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
      name: "― Albert Einstein",
    },

    { qoute: "“So many books, so little time.”", 
     name: "― Frank Zappa" },
    {
   
      qoute: "“A room without books is like a body without a soul.”",
      name: "― Marcus Tullius Cicero",
    },
    {
   
      qoute:
        "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
      name: "― Bernard M. Baruch",
    },
    {
     
      qoute: "“You've gotta dance like there's nobody watching,",
      name: "― William W. Purkey",
    },
    {

      qoute:
        "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
      name: "― Dr. Seuss",
    },
    {
      qoute: "“You only live once, but if you do it right, once is enough.”",
      name: "― Mae West",
    },
    { qoute: "“Be the change that you wish to see in the world.”",
      name: "― Mahatma Gandhi",
    },
  ];


function changeArtical(){
         
            var num=Math.ceil((Math.random()*10));        

    document.getElementById("author").innerHTML=contlist[num].name;
    document.getElementById("aricl").innerHTML=contlist[num].qoute;
    
}
// var elment=document.querySelector('#demo');


add.addEventListener('click',function(){
  changeArtical()
})




