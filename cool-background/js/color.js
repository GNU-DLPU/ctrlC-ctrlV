    var color1=null;
    var color2=null;
    function random(){
        return '#'+Math.random().toString(16).slice(2,8);
    }
    function start(){
    color1=random();
    document.querySelector('#bg').css("background", color1);
    setTimeout(changeColor, 2000);
}
    function changeColor(){
        var a,b,c,i=0;
        var animate=null;
        color2=random();
        var array1=strSlip(color1);
        var array2=strSlip(color2);
        var r1=array2[0]-array1[0];
        var r2=array2[1]-array1[1];
        var r3=array2[2]-array1[2];
         animate=setInterval(function(){
            array1[0]=array1[0]+Math.round(r1/30);
            array1[1]=array1[1]+Math.round(r2/30);
            array1[2]=array1[2]+Math.round(r3/30);
            a=array1[0].toString(16);
            b=array1[1].toString(16);
            c=array1[2].toString(16);
            i++;
            document.querySelector('#bg').css("background", returnColor(a,b,c));
            if(i==20){
                clearInterval(animate);
                color1=returnColor(a,b,c);
            }
        },100);
        setTimeout(changeColor, 7000);
    }
    function returnColor(a,b,c){
         return "#"+a+b+c;
    }
    function strSlip(str){
        var num=[];
        var x=parseInt(str.substring(1,3),16);
        var y=parseInt(str.substring(3,5),16);
        var z=parseInt(str.substring(5,7),16);
        num.push(x);
        num.push(y);
        num.push(z);
        return num;
    }
