/**
 * Created by Administrator on 2015/8/11.
 */

function Game(){

}

Game.prototype = {
    mainloop:function(self){

        ctx.clearRect(0,0,10000,10000);


        frameNum++;



        //老鼠出来
        if(frameNum % 60 == 0){
            //mouseArr = []
            for(var i=0;i<mouseArr.length;i++){
                if(mouseArr[i].ishitted){
                    mouseArr = _.without(mouseArr,mouseArr[i])
                }
            }
            mouseArr.push(new Mouse());
        }
        //console.log(mouseArr.length)
        //输出地鼠

        for (var i = 0; i < mouseArr.length; i++) {
            mouseArr[i].update();
            if (mouseArr[i]) {
                mouseArr[i].renderlive();

                if (mouseArr[i].line == "1") {
                    fuckland.renderFuck1();
                } else if (mouseArr[i].line == "2") {
                    fuckland.renderFuck2();
                } else if (mouseArr[i].line == "3") {
                    fuckland.renderFuck3();
                }

            }
        }

        //总分
        ctx.drawImage(imageArr[4],8,152,112,42,canvas.width/2+150,20,112,42)

        ctx.font = "50px 微软雅黑";
        ctx.fillStyle = "yellow";
        ctx.fillText(zongfen,canvas.width/2+247,60)

        ctx.fillStyle = "red";
        ctx.fillText(zongfen,canvas.width/2+249,62)

        //输出分；
        //for(var i=0;i<scoreArr.length;i++){
        //    scoreArr[i].update();
        //    scoreArr[i].renderScore();
        //}

        for(var i=0;i<scoreArr.length;i++){
            scoreArr[i].update();
            //if(scoreArr[i]){
            scoreArr[i].renderScore();
            //}
        }


        ttt.render()


    },
    run:function(){
        var self = this;
        setInterval(self.mainloop,1000/FPS,self)
    }
}