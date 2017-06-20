;(function(){
	window.SpaceInviders = function(el){
		el.style.height = "800px";
        el.style.width = "800px";
        el.style.backgroundColor = "black";
        el.style.position= "relative";
        this.arrEnemy= [];
        this.gun = new sprite(1,128+128*i,128,"img/playerGun.png")
        el.appendChild(this.gun.elImg)
        for(var i=0;i<5;i++) {
            
           arrEnemy.push(new sprite(1,128+128*i,128,"img/enemy1.png"));
            el.appendChild(arrEnemy[i].elImg)
            
        }
	}	
    
    function sprite(speed,x,y,pathImg) {
        this.isAlive = true;
        this.speed = speed;
        this.x=x;
        this.y=y;
        this.pathImg = pathImg;
        
        this.elImg = document.createElement('img');
        this.elImg.src = this.pathImg;
        
        
        sprite.prototype.dead = function() {
            
        }
    }
}());