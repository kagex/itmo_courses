;(function(){
	//Массив для хранения игрового поля
	var gamePlace = [];
	var size; //Размер поля
	var container; //Основной html документ
	var currentChooseElement = null; //Текущий выбранный элемент
	
	//Функция генерация числа в заданном интервале
	function getRandomNumberInInterval(min, max){
		return Math.round(Math.random()*(max - min) + min);
	}
	
	//Функция находит от 3 и более в ряд и удаляет их, 
	//возвращая количество удаленных элементов
	function cheak(){
		var arrIndexForDelete = [];		
		//Проверяем все строки
		var tempNum;
		for(var i=0; i<size; i++){
			for(var j=0; j<size; j++){
				tempNum = gamePlace[size*i+j];
				count = 1;
				for(var z=j+1; z<size; z++){
					if(tempNum === gamePlace[size*i+z]){
						count++;
					} else {
						break;
					}
				}
				if(count>=3){
					for(var z=0; z<count; z++){
						arrIndexForDelete.push(size*i+j+z);
					}
				}
			}
		}
		//Проверяем все столбцы
		for(var i=0; i<size; i++){
			for(var j=0; j<size; j++){
				tempNum = gamePlace[size*j+i];
				count = 1;
				for(var z=j+1; z<size; z++){
					if(tempNum === gamePlace[size*z+i]){
						count++;
					} else {
						break;
					}
				}
				if(count>=3){
					for(var z=0; z<count; z++){
						arrIndexForDelete.push(size*(j+z)+i);
					}
				}
			}
		}
		//Удаляем элементы
		for(var i = 0; i < arrIndexForDelete.length; i++){
			gamePlace[arrIndexForDelete[i]]  = undefined;
		}
		
		return arrIndexForDelete.length;
	}
	
	//Функция скрывает все div элементы помеченные в массиве как undefined
	function fadeToUndefined(){
		var listOfDivs = container.getElementsByTagName('div');
		
		for(var i = 0; i < listOfDivs.length; i++) {
			if(gamePlace[i] === undefined){
				$(listOfDivs[i]).fadeTo(500, 0);
			}
		}
	}
	
	//Функция обрабатывает нажатия на элементы и их перемещение с соседними
	function clickProcees(event){
		console.log(event.target);
		if(currentChooseElement == null){
			currentChooseElement = event.target;
		} else {
			//Меняем местами элементы в массиве
			var lastIndex = currentChooseElement.getAttribute('data-index');
			var newIndex = event.target.getAttribute('data-index');
			var temp = gamePlace[lastIndex];
			gamePlace[lastIndex] = gamePlace[newIndex];
			gamePlace[newIndex] = temp;
			currentChooseElement = null;
			updateRender();
			circleCheak();
		}
	}
	
	//Функция перерисовывает игровое поле
	function updateRender(){
		var html = "";
		for(var i=0; i < size*size; i++){
			var randomNumber = getRandomNumberInInterval(1,5);
			if (gamePlace[i])	{
				html = html + createGemDivHTML(i, gamePlace[i]);
			} else {
				html = html + createGemDivHTML(0, gamePlace[i]);;
			}
			
		}
		container.innerHTML = html;
	}
	
	//Цикл сдвигает пустые ячейки вверх игрового поля
	function shiftEmptyCells(){
		var tempNum;
		for(var i=0; i<size; i++){
			var countOfUndefined = 0;
			for(var z=size-1; z>=0; z--){
				if( gamePlace[z*size + i] === undefined){
					countOfUndefined++;	
				} else if (countOfUndefined > 0) {
					gamePlace[(z + countOfUndefined)*size + i] = gamePlace[z*size + i];
					gamePlace[z*size + i] = undefined;
				}							
			}
		}		
	}
	
	//Заполняем пустые ячейки новыми фигурами
	function fillEmptyCells(){
		var html = "";
		for(var i=0; i < size*size; i++){
			var randomNumber = getRandomNumberInInterval(1,5);
			if (gamePlace[i] !== undefined)	{
				html = html + createGemDivHTML(i, gamePlace[i]);
			} else {
				var randomNumber = getRandomNumberInInterval(1,5);
				html = html + createGemDivHTML(i, randomNumber);
				gamePlace[i] = randomNumber;
			}			
		}
		container.innerHTML = html;
	}

	//Функция реализуюшая цикл проверки, уборки 3 в ряд, и генерации
	//новых элементов
	function circleCheak(){
		//Цикл работает пока встречаются три в ряд
		setTimeout(function(){
			//Функция находит от 3 и более в ряд и удаляет их
			if (cheak()) {
				//Найдены три в ряд
				
				fadeToUndefined() //Анимация удаления
				setTimeout(function(){
					updateRender();
					setTimeout(function(){
						//Сдвигаем пустые ячейки вверх игрового поля
						shiftEmptyCells();
						updateRender();
						setTimeout(function(){
							//Заполняем пустые ячейки вверх игрового поля
							fillEmptyCells();
							updateRender();
							circleCheak()					
						},500);					
					},300);		
				},500);				
			} else {
				//Не найдены три в ряд
			}
		},500);		
	}
	
	function createGemDivHTML(pos, num){
		return "<div data-index=\"" + pos +
			"\" style=\"background-image:url(img/"+ num + 
			".png);width: 44px; height:44px;\"></div>";
	}
	
	window.Match3 = {
		createGamePlace: function(divContainer, n){
			size = n;
			container = document.getElementById(divContainer);
			container.style = "display: flex;	flex-direction: row;" +
				"flex-wrap: wrap; width: "+ (44*n) +"px; height: "+ (44*n) +"px;";
			//Создаем DIV элементы фигур
			var html = "";
			for(var i=0; i < n*n; i++){
				var randomNumber = getRandomNumberInInterval(1,5);
				html = html + createGemDivHTML(i, randomNumber);
				gamePlace.push(randomNumber);
			}						
			container.innerHTML = html;
			//Добавляем слушателя на контейнер с игровым полем
			container.onclick = clickProcees;
			
			circleCheak();
			console.log(gamePlace);			
		}		
	}	
}());