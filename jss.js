let one = document.getElementById('one')
let two = document.getElementById('two')
let two2 = document.getElementById('two2')

let x = document.getElementById('x')
let x0 = document.getElementById('x0')
let x22 = document.getElementById('x22')

let in1 = document.getElementById('in1')
let in2 = document.getElementById('in2')
let in_user = document.getElementById('in_user')
let pass_user = document.getElementById('in_user')

let b1 =document.getElementById('b1')
let b2 = document.getElementById('b2')

let b2_two = document.getElementById('b2_two')

let next = document.getElementById('next')
let next2 = document.getElementById('next2')


//////////////////////////// fares/////////////////////////
let data ;

if (localStorage.pro != null){
    data= (JSON.parse(localStorage.pro))
} else{data=[]}

///


function add(){
    let mes={
        message:in1.value,
        message2:in2.value,
        
    }
    data.push(mes)
    localStorage.setItem("pro",JSON.stringify(data))
    console.log(data)
}

//////////////////////////
function aa (){
    for(let i=0;i<data.length;i++){
    let imo = document.createElement('img')
    let imo_at = document.createAttribute('src')
    imo_at.value="img/1.png"
    imo.setAttributeNode(imo_at)
    imo.style.width="30px"

    one.appendChild(imo)

    let area = document.createElement('textarea')
    area.style.width="260px"
    area.style.height="30px"
    area.style.backgroundColor="rgba(210, 198, 30, 0.411)"
    area.style.color="white"
    area.style.textAlign="center"
    area.style.borderRadius="20px"

    area.innerHTML=data[i].message;

    //
    let area2 = document.createElement('textarea')
    area2.style.width="260px"
    area2.style.height="30px"
    area2.style.backgroundColor="red"
    area2.style.color="white"
    area2.style.textAlign="center"
    area2.style.borderRadius="20px"

    area2.innerHTML=data[i].message2;

    one.appendChild(area);

    one.appendChild(area2);

    one.scrollBy(0,100)

    }
    /////////
    
        }



/////

/////
aa();

b1.onclick=function(){
    add();
    aa();
    in1.value=""

}





////////////////////////////amel/////////////

///



function bb (){
    for(let i=0;i<data.length;i++){
    let imo2 = document.createElement('img')
    let imo_at2 = document.createAttribute('src')
    imo_at2.value="img/3.png"
    imo2.setAttributeNode(imo_at2)
    imo2.style.width="30px"

    two.appendChild(imo2)

    let area2 = document.createElement('textarea')
    area2.style.width="260px"
    area2.style.height="30px"
    area2.style.backgroundColor="red"
    area2.style.color="white"
    area2.style.textAlign="center"
    area2.style.borderRadius="20px"

    area2.innerHTML=data[i].message2;

    let area = document.createElement('textarea')
    area.style.width="260px"
    area.style.height="30px"
    area.style.backgroundColor="rgba(210, 198, 30, 0.411)"
    area.style.color="white"
    area.style.textAlign="center"
    area.style.borderRadius="20px"

    area.innerHTML=data[i].message;
    two.appendChild(area2);
    two.appendChild(area);

    two.scrollBy(0,100)
    }
}
bb();

b2_two.onclick=function(){
    add();
    bb();
    in2.value=""

}












































send.onclick=function(){
        if(in_user.value=='fares'){
            x.style.display='block'
       

            x0.style.display='none'
        }
        else if (in_user.value =='amel'){
            x22.style.display='block'
   

            x0.style.display='none'

        }


    
    
}























