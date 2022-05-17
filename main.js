const gallery = (el) => {
    if ( el== 'barcelona'){
        document.getElementById('wybrane').src = 'barcelona.jpg';
    }
    else if (el== 'londyn'){
        document.getElementById('wybrane').src = 'londyn.jpg';
    }
    else if (el== 'zakhyntos'){
        document.getElementById('wybrane').src = 'zakhyntos.jpg';
    }
    else if (el== 'malta'){
        document.getElementById('wybrane').src = 'malta.jpg';
    }
    else if (el== 'mediolan'){
        document.getElementById('wybrane').src = 'mediolan.jpg';
    }
    else if (el== 'wenecja'){
        document.getElementById('wybrane').src = 'wenecja.jpg';
    }
}


const change_kolor1= () =>{
    document.getElementById('body').style.backgroundColor='#01161E';
    document.getElementById('baner').style.backgroundColor='#598392';
    document.getElementById('body').style.color='#EFF6E0';
}
const change_kolor2= () =>{
    document.getElementById('body').style.backgroundColor='#16001E';
    document.getElementById('baner').style.backgroundColor='#42033D';
    document.getElementById('body').style.color='#E5C3D1';
}
const change_kolor3= () =>{
    document.getElementById('body').style.backgroundColor='#331400';
    document.getElementById('baner').style.backgroundColor='#a84000';
    document.getElementById('body').style.color='#FFC971';
}


const change_size = () => {
    let x = document.getElementById('czcionka').value;
    document.getElementById('body').style.fontSize = x;
}

const change_border = () =>{
    if (document.getElementById('border').checked){
        document.getElementById('wybrane').style.border = '2px solid white';
    }
    else{
        document.getElementById('wybrane').style.border = 'none';
    }
}