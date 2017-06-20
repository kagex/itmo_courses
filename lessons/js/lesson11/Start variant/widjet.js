;(function(){
	
	window.Slider = MySlider;
	//Инициализация слайдера 
	function MySlider(el, objSetting){
		this.el = el;
		this.obgSettings = objSetting;
		this.ul = this.render();
		this.iter = 
			new IteratorSecond(0, 
			-(this.obgSettings.image_width * (this.obgSettings.arrImg.length-1)));
		this.animate();
	}

	MySlider.prototype.render = function(){
		this.el.classList.add("container");
		var divWrapper = document.createElement("div");
		divWrapper.classList.add("image-slider-wrapper");
		this.el.appendChild(divWrapper);
		var ul = document.createElement("ul");
		ul.classList.add("image_slider");
		divWrapper.appendChild(ul);
		var arrImg = this.obgSettings.arrImg;
		ul.style.width = 
			(this.obgSettings.image_width * arrImg.length) + "px";
		ul.style.left="0px";
		for(var i = 0; i<arrImg.length; i++){
			var li = document.createElement("li");
			var img = document.createElement("img");
			img.src = arrImg[i];
			li.appendChild(img);
			ul.appendChild(li);
		}
		return ul;
	}
	
	MySlider.prototype.animate = function(){		
		var left = parseInt(this.ul.style.left);
		var that = this;
		if(left%this.obgSettings.image_width === 0){
			//Когда демонстрация слайда
			setTimeout(function(){
				that.ul.style.left = that.iter._incrL() + "px";
				that.animate();
			}, this.obgSettings.durationSleep);
		} else {
			//Передвижение слайда
			//Когда демонстрация слайда
			setTimeout(function(){
				that.ul.style.left = that.iter._incrL() + "px";
				that.animate();
			}, this.obgSettings.delayMove);
		}
	}
}());