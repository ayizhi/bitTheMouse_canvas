/**
 * Created by Administrator on 2015/8/12.
 */
var num = 0;
function Score(obj){
    this.image = imageArr[4];
    this.imgx = obj.imgx;
    this.imgy = obj.imgy;
    this.w = obj.w;
    this.h = obj.H;
    this.x = obj.x;
    this.y = obj.y;
    this.control = obj.y;
}

Score.prototype = {

    update:function(){


        this.y -= 2 ;
        if(this.y < this.control-100){
            scoreArr = _.without(scoreArr,this)
        }
    },
    renderScore:function(){
        ctx.drawImage(this.image,this.imgx,this.imgy,this.w,this.h,this.x,this.y,this.w,this.h);
        //ctx.drawImage(this.image,0,0,120,71,this.x,this.y,120,71);

    }



}