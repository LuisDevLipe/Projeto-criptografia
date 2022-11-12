                    //base64//                        
document.getElementById('submitBtn').addEventListener('click', clicar);
        function clicar(){             
            event.preventDefault(); /////// variaves recebidas do navegador 
            var modo = document.getElementById('seletorMetodo').value;
            var encode = document.getElementById('seletorEncode').checked ;
            var decode = document.getElementById('seletorDecode').checked ; 
                if(modo == "base64" & encode==true ){
                    var char = document.getElementById('inputTexto').value;
                    var charBtoA = (btoa(char));
                    document.getElementById('saida').textContent = `Codificação ficou ${charBtoA}` ;
                } 
                else if(modo == "base64" & decode==true ){
                    var char = document.getElementById('inputTexto').value;
                    var charAtoB = (atob(char));
                    document.getElementById('saida').textContent = `Decodificação ficou ${charAtoB}` ;
                }
            }
                document.getElementById('seletorMetodo').onchange = function() {
                var modo = this.value;
                if(modo == "cifra" ){document.getElementById('incrementoDiv').style.display = "block";}
                else if(modo== "base64") {
                    document.getElementById('incrementoDiv').style.display = "none";
                }
            }
                        //cifra///
            function caesarCipher(event) {
                event.preventDefault();
                var str = document.getElementById('inputTexto').value ;
                var num = document.getElementById('incremento').value ;
                num = num % 26; 
                        var modo = document.getElementById('seletorMetodo').value;  
                        var encode = document.getElementById('seletorEncode').checked ;
                        var decode = document.getElementById('seletorDecode').checked ;
                var lowerCaseStr = str.toLowerCase();
                var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
                var newStr = ' ';
            if (modo == "cifra" & encode == true){
                for(var i = 0 ; i < lowerCaseStr.length; i++){
                    var currentLetter = lowerCaseStr[i];
                    const especial = alphabet.includes(currentLetter) ;
                    if(currentLetter === ' ' || especial ===false) {
                        newStr += currentLetter ;
                        continue ;
                    }
                    var currentIndex = alphabet.indexOf(currentLetter);
                    var newIndex = currentIndex + num;
                    if(newIndex > 25) newIndex = newIndex - 26 ;
                    if(newIndex < 0) newIndex = newIndex + 26 ;
                    if(str[i] === str[i].toUpperCase()) {
                        newStr += alphabet[newIndex].toUpperCase();
                    } 
                    else newStr += alphabet[newIndex];
                }
                document.getElementById('saida').textContent = `Codificação ficou ${newStr}` ;
            } 
            else if(modo == "cifra" & decode == true){
                    for(var i = 0 ; i < lowerCaseStr.length; i++){
                        var currentLetter = lowerCaseStr[i];
                        const especial = alphabet.includes(currentLetter) ;
                        if(currentLetter === ' ' || especial ===false) {
                            newStr += currentLetter ;
                            continue ;
                        }
                        var currentIndex = alphabet.indexOf(currentLetter);
                        var newIndex = currentIndex - num;
                        if(newIndex > 25) newIndex = newIndex - 26 ;
                        if(newIndex < 0) newIndex = newIndex + 26 ;
                        if(str[i] === str[i].toUpperCase()) {
                            newStr += alphabet[newIndex].toUpperCase();
                        }
                        else newStr += alphabet[newIndex];
                    }  
                    document.getElementById('saida').textContent = `Decodificação ficou ${newStr}` ;    
                }
            }
            document.getElementById('submitBtn').addEventListener('click', caesarCipher);

            // Developed by Luis Felipe Macedo dos Santos LuisDevLipe.

            // 12/11/22
            
            // ヽ(•‿•)ノ .