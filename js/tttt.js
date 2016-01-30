/**
 * Created by Administrator on 2015/8/13.
 */
function T(Tx,Ty){
    this.x = Tx;
    this.y = Ty;
    this.image = imageArr[2];
}

T.prototype = {
    render:function(){
        ctx.drawImage(this.image,0,0,98,77,this.x,this.y,98,77)
    }
}