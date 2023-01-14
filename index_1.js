var x = document.querySelector('.in');
var y = document.querySelector('.up');
var a = document.querySelector('.box');
var brand =document.querySelector('.brand');
var z = document.querySelector('.plain');
var c = document.querySelector('.cipher');
var btn = document.querySelector('.submit');
 
document.body.querySelector('.in').addEventListener('click',function backup(event){
    y.style.backgroundColor =" rgb(41, 41, 41)";
    this.style.backgroundColor =" #171717";
    this.style.boxShadow = "none";
    y.style.boxShadow ="-2px -3px 5px 0px #00FFAB inset";
    y.style.webkitBoxShadow ="2px -3px 5px 0px #00FFAB inset";
    y.style.mozBoxShadow ="-2px -3px 5px 0px #00FFAB inset";
    brand.innerHTML='Encrypt Your message';
    c.innerHTML='Cipher text';
    btn.value='Encrypt';
    z.placeholder='plain text';
    
});

document.querySelector('.up').addEventListener('click',function(){
    x.style.backgroundColor =" rgb(41, 41, 41)";
    this.style.backgroundColor =" #171717";
    this.style.boxShadow = "none";
    x.style.boxShadow ="-2px -3px 5px 0px #00FFAB inset";
   x.style.webkitBoxShadow ="-2px -3px 5px 0px #00FFAB inset";
    x.style.mozBoxShadow ="-2px -3px 5px 0px #00FFAB inset";
    brand.innerHTML='Decrypt Your cipher';
    z.placeholder='cipher text';
    c.innerHTML='Your message';
    btn.value='Decrypt';
});
function Encrypt(pt, key)
{
    for(i=0;i<pt.length;i++)
    {
        
    }
}