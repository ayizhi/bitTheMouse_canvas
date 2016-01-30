/**
 * Created by Administrator on 2015/8/11.
 */
var fuckland = [
    {land1X:10,land1Y:32,x1:99,y1:253,land1W:578,land1H:52,line:1},
    {land2X:10,land2Y:127,x2:98,y2:345,land2W:578,land2H:52,line:2},
    {land3X:10,land3Y:222,x3:98,y3:440,land3W:578,land3H:52,line:3}
]
function Fuckland(){
    for(var i=0;i<fuckland.length;i++){
    for(var k in fuckland[i]){
        this[k] = fuckland[i][k]
    }}

    this.fuckimage = imageArr[1];
}

Fuckland.prototype = {
    renderFuck1 : function(){
        ctx.drawImage(imageArr[1],this.land1X,this.land1Y,this.land1W,this.land1H,this.x1,this.y1,this.land1W,this.land1H)},
    renderFuck2 : function(){
        ctx.drawImage(imageArr[1],this.land2X,this.land2Y,this.land2W,this.land2H,this.x2,this.y2,this.land2W,this.land2H)},
    renderFuck3 : function(){
        ctx.drawImage(imageArr[1],this.land3X,this.land3Y,this.land3W,this.land3H,this.x3,this.y3,this.land3W,this.land3H)}
}