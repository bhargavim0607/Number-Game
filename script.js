var a=[];
var ac=[11,12,13,14,15,21,22,23,24,25,31,32,33,34,35,41,42,43,44,45,51,52,53,54,55]
var po=[11,12,13,14,15,21,22,23,24,25,31,32,33,34,35,41,42,43,44,45,51,52,53,54,55];
var count=1;
function fill(){
    for(var i=0;i<ac.length;i++){
        d=document.getElementById(ac[i]);
        d.innerText="0";
    }
}
function clicka(d,n){
    
    for(var i=0;i<ac.length;i++){
        document.getElementById(ac[i]).style.backgroundColor="antiquewhite";
    }
    if(po.includes(n)){
        document.getElementById(n).innerText=count;
        count+=1;
        po=[];
        a.push(n);
        var fn=Math.floor(n/10);
        var sn=n%10;
        var dn=(fn+2)*10+(sn-2);
        var nn=(fn-2)*10+(sn+2);
        console.log(fn,sn,dn);
        if(ac.includes(dn) & !a.includes(dn)){
            po.push(dn);
        }
        if(ac.includes(nn) & !a.includes(nn)){
            po.push(nn);
        }
        if(ac.includes(n+3) & !a.includes(n+3)){
            po.push(n+3);
        }
        if(ac.includes(n+30) & !a.includes(n+30)){
            po.push(n+30);
        }
        if(ac.includes(n+22) & !a.includes(n+22)){
            po.push(n+22);
        }
        if(ac.includes(n-3) & !a.includes(n-3)){
            po.push(n-3);
        }
        if(ac.includes(n-30) & !a.includes(n-30)){
            po.push(n-30);
        }
        if(ac.includes(n-22) & !a.includes(n-22)){
            po.push(n-22);
        }
        console.log(po);
        
        for(var i=0;i<po.length;i++){
            document.getElementById(po[i]).style.backgroundColor="blue";
        }
        if(po.length==0){
            for(var i=0;i<ac.length;i++){
                document.getElementById(ac[i]).style.backgroundColor="antiquewhite";
            }
            alert("Game Ended,As no more tiles can be filled")
            window.location.reload(true);
            fill();
            po=[11,12,13,14,15,21,22,23,24,25,31,32,33,34,35,41,42,43,44,45,51,52,53,54,55];
            
        }
        if(count==25){
            alert("You Have Won The Game!!!!")
        }
    }
    
    
}
