	
		var coin = 10;
		var turn = 0;
		var jv = 0;
		var cv = 0;

								//Creación select


		for(let i = 0; i<coin; i++){

			var opcion = document.getElementsByTagName('select')[0];
			opcion.appendChild(document.createElement('option'));
			opcion.children[i].value = i+1;
			opcion.children[i].innerHTML = i+1;

		}

		function jugar(el, el2){

								//Reinicio texto victorias

			document.body.children[2].children[2].children[0].textContent = ''

								//Incremento e impresión del turno
			turn++;
			document.getElementsByTagName('span')[1].textContent = turn;

			var coinj = parseInt(document.getElementsByTagName('select')[0].value);

								//Generación número aleatorio (tirada)

			var t = Math.floor(Math.random()*6);
			var t2 = Math.floor(Math.random()*6);

								//Generación aleatoria de grados para la "animación"

			var rx = Math.floor(Math.random()*660) + 180;
			var ry = Math.floor(Math.random()*660) + 180;
			var rz = Math.floor(Math.random()*660) + 180;

								//Rotación del dado

			el[0].parentElement.style = 'left: 45%; transform: rotateX('+ rx + 'deg) rotateY('+ ry + 'deg) rotateZ('+ rz + 'deg);'
			el2[0].parentElement.style = 'left: 45%;transform: rotateX('+ -rx + 'deg) rotateY('+ -ry + 'deg) rotateZ('+ -rz + 'deg);'
			
								//Switch para rotar todas las caras del dado. Notamos que hay que rotar todas las caras según la posición de la tirada

					setTimeout(()=>{switch(t){

						case 0:
							el[t].style = 'transform: translateZ(50px)';		
							el[t+1].style = 'transform: rotateY(180deg) translateZ(50px)';
							el[t+2].style = 'transform: rotateY(90deg)translateZ(50px)';
							el[t+3].style = 'transform: rotateX(-90deg)translateZ(50px)';
							el[t+4].style = 'transform: rotateX(90deg)rotateY(0deg)translateZ(50px)';
							el[t+5].style = 'transform: rotateY(-90deg) rotateX(0deg)translateZ(50px)'
							break;

						case 1:
							el[t].style = 'transform: translateZ(50px)';
							el[t-1].style = 'transform: rotateY(180deg) translateZ(50px)';
							el[t+1].style = 'transform: rotateY(90deg)translateZ(50px)';
							el[t+2].style = 'transform: rotateX(-90deg)translateZ(50px)';
							el[t+3].style = 'transform: rotateX(90deg)rotateY(0deg)translateZ(50px)';
							el[t+4].style = 'transform: rotateY(-90deg) rotateX(0deg)translateZ(50px)';
							break;

						case 2:
							el[t].style = 'transform: translateZ(50px)';
							el[t-1].style = 'transform: rotateY(180deg) translateZ(50px);';
							el[t-2].style = 'transform: rotateX(-90deg)translateZ(50px)';
							el[t+1].style = 'transform: rotateY(90deg)translateZ(50px)';
							el[t+2].style = 'transform: rotateX(90deg)rotateY(0deg)translateZ(50px)';
							el[t+3].style = 'transform: rotateY(-90deg) rotateX(0deg)translateZ(50px)';
							break;

						case 3:
							el[t].style = 'transform: translateZ(50px)';
							el[t-1].style = 'transform: rotateY(180deg) translateZ(50px);';
							el[t-2].style = 'transform: rotateX(-90deg)translateZ(50px)';
							el[t-3].style = 'transform: rotateY(90deg)translateZ(50px)';
							el[t+1].style = 'transform: rotateX(90deg)rotateY(0deg)translateZ(50px)';
							el[t+2].style = 'transform: rotateY(-90deg) rotateX(0deg)translateZ(50px)';
							break;

						case 4:
							el[t].style = 'transform: translateZ(50px)';
							el[t-1].style = 'transform: rotateY(180deg) translateZ(50px);';
							el[t-2].style = 'transform: rotateX(-90deg)translateZ(50px)';
							el[t-3].style = 'transform: rotateY(90deg)translateZ(50px)';
							el[t-4].style = 'transform: rotateX(90deg)rotateY(0deg)translateZ(50px)';
							el[t+1].style = 'transform: rotateY(-90deg) rotateX(0deg)translateZ(50px)';
							break;

						case 5:
							el[t].style = 'transform: translateZ(50px)';
							el[t-1].style = 'transform: rotateY(180deg) translateZ(50px);';
							el[t-2].style = 'transform: rotateX(-90deg)translateZ(50px)';
							el[t-3].style = 'transform: rotateY(90deg)translateZ(50px)';
							el[t-4].style = 'transform: rotateX(90deg)rotateY(0deg)translateZ(50px)';
							el[t-5].style = 'transform: rotateY(-90deg) rotateX(0deg)translateZ(50px)';
							break;



					}
					}, 100);

					setTimeout(()=>{switch(t2){

						case 0:
							el2[t2].style = 'transform: translateZ(50px)';		
							el2[t2+1].style = 'transform: rotateY(180deg) translateZ(50px)';
							el2[t2+2].style = 'transform: rotateY(90deg)translateZ(50px)';
							el2[t2+3].style = 'transform: rotateX(-90deg)translateZ(50px)';
							el2[t2+4].style = 'transform: rotateX(90deg)rotateY(0deg)translateZ(50px)';
							el2[t2+5].style = 'transform: rotateY(-90deg) rotateX(0deg)translateZ(50px)'
							break;

						case 1:
							el2[t2].style = 'transform: translateZ(50px)';
							el2[t2-1].style = 'transform: rotateY(180deg) translateZ(50px)';
							el2[t2+1].style = 'transform: rotateY(90deg)translateZ(50px)';
							el2[t2+2].style = 'transform: rotateX(-90deg)translateZ(50px)';
							el2[t2+3].style = 'transform: rotateX(90deg)rotateY(0deg)translateZ(50px)';
							el2[t2+4].style = 'transform: rotateY(-90deg) rotateX(0deg)translateZ(50px)';
							break;

						case 2:
							el2[t2].style = 'transform: translateZ(50px)';
							el2[t2-1].style = 'transform: rotateY(180deg) translateZ(50px);';
							el2[t2-2].style = 'transform: rotateX(-90deg)translateZ(50px)';
							el2[t2+1].style = 'transform: rotateY(90deg)translateZ(50px)';
							el2[t2+2].style = 'transform: rotateX(90deg)rotateY(0deg)translateZ(50px)';
							el2[t2+3].style = 'transform: rotateY(-90deg) rotateX(0deg)translateZ(50px)';
							break;

						case 3:
							el2[t2].style = 'transform: translateZ(50px)';
							el2[t2-1].style = 'transform: rotateY(180deg) translateZ(50px);';
							el2[t2-2].style = 'transform: rotateX(-90deg)translateZ(50px)';
							el2[t2-3].style = 'transform: rotateY(90deg)translateZ(50px)';
							el2[t2+1].style = 'transform: rotateX(90deg)rotateY(0deg)translateZ(50px)';
							el2[t2+2].style = 'transform: rotateY(-90deg) rotateX(0deg)translateZ(50px)';
							break;

						case 4:
							el2[t2].style = 'transform: translateZ(50px)';
							el2[t2-1].style = 'transform: rotateY(180deg) translateZ(50px);';
							el2[t2-2].style = 'transform: rotateX(-90deg)translateZ(50px)';
							el2[t2-3].style = 'transform: rotateY(90deg)translateZ(50px)';
							el2[t2-4].style = 'transform: rotateX(90deg)rotateY(0deg)translateZ(50px)';
							el2[t2+1].style = 'transform: rotateY(-90deg) rotateX(0deg)translateZ(50px)';
							break;

						case 5:
							el2[t2].style = 'transform: translateZ(50px)';
							el2[t2-1].style = 'transform: rotateY(180deg) translateZ(50px);';
							el2[t2-2].style = 'transform: rotateX(-90deg)translateZ(50px)';
							el2[t2-3].style = 'transform: rotateY(90deg)translateZ(50px)';
							el2[t2-4].style = 'transform: rotateX(90deg)rotateY(0deg)translateZ(50px)';
							el2[t2-5].style = 'transform: rotateY(-90deg) rotateX(0deg)translateZ(50px)';
							break;



					}
					}, 100);
											//Devolvemos el dado a la posición original
											
					setTimeout(()=>{el[0].parentElement.style = 'transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);';
					 el2[0].parentElement.style = 'transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);';}, 1500)

														//Cálculo ganador partida
					setTimeout(()=>{

						if(t<t2){

						document.body.children[2].children[2].children[0].textContent = '¡El jugador gana!'
						
														//incremento e imprsión de las victorias del jugador

						document.getElementsByTagName('span')[2].textContent = ++jv;

						document.getElementsByTagName('span')[0].textContent = (coin+=coinj);


						}else if(t == t2){

						document.body.children[2].children[2].children[0].textContent = '¡Empate!';
						}else{

						document.body.children[2].children[2].children[0].textContent = '¡La casa gana!';
						coin-=coinj;

						//incremento e imprsión de las victorias del jugador
						//Si quedan 0 monedas se reseta la partida y el jugador disponede 10 monedas otra vez, sino se le restan las perdidas
							if ( coin == 0 ) {
								alert('Has perdido, canalla.');
								coin = 10;
								document.getElementsByTagName('span')[0].innerHTML = coin;
								document.getElementsByTagName('span')[3].innerHTML = 0;
								document.getElementsByTagName('span')[2].innerHTML = 0;
								turn = 0;
								document.getElementsByTagName('span')[1].innerHTML = turn;
							}else{
								document.getElementsByTagName('span')[3].innerHTML = ++cv;
								document.getElementsByTagName('span')[0].innerHTML = coin;
							}
						}


						for ( let i = 0; i < coin; i++ ) {
							var opcion = document.getElementsByTagName('select')[0];
							opcion.appendChild(document.createElement('option'));
							opcion.children[i].value = i+1;
							opcion.children[i].innerHTML = i+1;
						}
						;}, 3100)

						for(let i = 0; i<coin;i++){			
							var opcion = document.getElementsByTagName('select')[0];
							opcion.firstElementChild.remove();
						}

					}