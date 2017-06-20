;(function(){
	//Функция генерации числа игрового поля
	function getRandomNumber(arr){
		var randomIndex = getRandomNamberInInterval(0, arr.length - 1);
		return arr.splice(randomIndex, 1)[0];
	}

	//Функция генерация числа в заданном интервале
	function getRandomNamberInInterval(min, max){
		return Math.round(Math.random()*(max - min) + min);
	}
	
	//Функция генерации стиля
	function getRandomStyle(){
		return 'font-size:' + getRandomNamberInInterval(15, 35) + ';color:' + getRandomColor() + ';';
	} 
	
	//Функция генерации цвета текста
	function getRandomColor(){
		return 'rgb('+ getRandomNamberInInterval(0,255) + ',' + getRandomNamberInInterval(0,255) + ','
			+ getRandomNamberInInterval(0,255) +')';
	}
	
	window.myutils = {
		//Функция создания игрового поля
		createGamePlace:function(tableId, n){
			var generalElement = document.getElementById(tableId);			
			//Формируем массив чисел для наполнения таблицы чисел
			var arrNumbers = [];
			for(var i = 1; i <= n*n; i++){
				arrNumbers.push(i);
			}
			//Создаем игровое поле (i-тая строка, j-столбец)
			var elementTable = document.createElement('table');
			var elementTBody = document.createElement('tbody');
			for(var i = 0; i < n; i++){
				var elementTr = document.createElement('tr');
				for(var j = 0; j < n; j++){
					var elementTd = document.createElement('td');
					elementTd.style = getRandomStyle();
					elementTd.innerHTML = getRandomNumber(arrNumbers);
					elementTr.appendChild(elementTd);					
				}
				elementTBody.appendChild(elementTr);
			}
			elementTable.appendChild(elementTBody);
			generalElement.appendChild(elementTable);
            var a=1;
            generalElement.addEventListener('click', function(e)
                if (e.target.tagName = "TD") {
                    var content = e.target.innerText;
                    if (parseInt (content) === a) {
                        e.target.style.backgroundColor = "rgb(255,0,0)";
                        a++
                        }
            
                },false );
		}		
	};	
}());