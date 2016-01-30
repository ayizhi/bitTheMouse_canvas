/**
 * Created by Administrator on 2015/8/11.
 */
var allMouse = [
    {imgLiveX:0, imgLiveY:0,   imgDieX:1322,  imgDieY:0,  wL:120, hL:130,wD:120,hD:130,  score:0,   more:1.2},
    {imgLiveX:0, imgLiveY:131, imgDieX:1322, imgDieY:131, wL:120, hL:130,wD:120,hD:130,  score:100, more:1},
    {imgLiveX:0, imgLiveY:260, imgDieX:1322, imgDieY:260, wL:120, hL:130,wD:120,hD:130,  score:500, more:1},
    {imgLiveX:0, imgLiveY:390, imgDieX:1322, imgDieY:390, wL:120, hL:130,wD:120,hD:130,  score:-100,more:1},
    {imgLiveX:0, imgLiveY:520, imgDieX:1322, imgDieY:520, wL:120, hL:130,wD:120,hD:130,  score:0,   more:0.5},
]
var mouseArr = [];


var locationArr = [
    {topX:135,topY:145,line:1,   bottomX:136,bottomY:275},
    {topX:324,topY:145,line:1,   bottomX:325,bottomY:275},
    {topX:521,topY:151,line:1,   bottomX:523,bottomY:275},

    {topX:111,topY:239,line:2,   bottomX:106,bottomY:364},
    {topX:326,topY:240,line:2,   bottomX:320,bottomY:364},
    {topX:527,topY:237,line:2,   bottomX:523,bottomY:364},

    {topX:103,topY:336,line:3,    ottomX:99,bottomY:468},
    {topX:325,topY:340,line:3,   bottomX:326,bottomY:468},
    {topX:546,topY:342,line:3,   bottomX:544,bottomY:468}

]

function Mouse(){
    var randomNum1 = _.random(0,allMouse.length-1);
    for(var k in allMouse[randomNum1]){
        this[k] = allMouse[randomNum1][k]
    }

    var randomNum2 = _.random(0,locationArr.length-1);
    for(var l in locationArr[randomNum2]){
        this[l] = locationArr[randomNum2][l];
    }
    this.mouseImage = imageArr[5];
    this.x = this.topX ;
    this.y = this.topY ;
    this.imgX = this.imgLiveX;
    this.imgY = this.imgLiveY;
    this.frame = this.imgLiveX;
    this.ishitted = false;
    this.w = this.wL;
    this.h = this.hL;
}


Mouse.prototype = {
    update:function(){
        if(frameNum % 5 == 0){
            if(this.ishitted){
                this.imgX = this.imgDieX;
                this.imgY = this.imgDieY;
                this.w = this.wD;
                this.h = this.hD;
            }
            else{
                this.frame += 120.4;
                if (this.frame > this.imgLiveX + 121 * 10) {
                    mouseArr = _.without(mouseArr, this)
                }
                this.imgX = this.frame;
                this.imgY = this.imgLiveY;
                this.w = this.wL;
                this.h = this.hL;
            }
        }

    },
    renderlive:function(){
        ctx.clearRect(0,0,10000,10000);
        ctx.drawImage(this.mouseImage,this.imgX,this.imgY,this.w,this.h,this.x,this.y,this.w,this.h)
        //ctx.drawImage(this.image,this.imgDieX,this.imgDieY,this.wD,this.hD,this.topX,this.topY,this.wD,this.hD)
    },

    hitted:function(){
        //this.imgX = this.imgDieX;
        //this.imgY = this.imgDieY;
        //this.w = this.wD;
        //this.h = this.hD;
        this.ishitted = true;
        //ctx.drawImage(this.mouseImage,this.imgDieX,this.imgDieY,this.wD,this.hD,this.x,this.y,this.wD,this.hD)

        //mouseArr = _.without(mouseArr,this)

    }
}