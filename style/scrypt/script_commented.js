            ///////// gatilho base 64 //////////

document.getElementById('submitBtn').addEventListener('click', clicar);
            ////////// funcao b64 //////////////
        function clicar(){             
            event.preventDefault(); 
            /////// variaves recebidas do navegador 
            var modo = document.getElementById('seletorMetodo').value;   
            var encode = document.getElementById('seletorEncode').checked ;
            var decode = document.getElementById('seletorDecode').checked ; 
            //////// o if e o else if distingue a operacao codificar de decodificar e realiza a operacao correta ///////
                if(modo == "base64" & encode==true ){                                                /////////// distigue a operacao que o usuario deseja , codificar ou decodificar 
                    var char = document.getElementById('inputTexto').value;                          //////////cria uma nova variavel com o valor recebido pelo usuario atrav[es] do input
                    var charBtoA = (btoa(char));                                                     /////////converte para base64
                    document.getElementById('saida').textContent = `Codificação ficou ${charBtoA}` ; ////////envia para o navegador atraves do documento html
                } else if(modo == "base64" & decode==true ){                                         ///////distigue a operacao que o usuario deseja , codificar ou decodificar 
                    var char = document.getElementById('inputTexto').value;                          //////
                    var charAtoB = (atob(char));                                                     /////converte de base64 para a linguagem do usuario  
                    document.getElementById('saida').textContent = `Decodificação ficou ${charAtoB}` ; 
                }
            }



                    //////////////// cifra de caesar //////////////////////////
                   //////////////// abrir campo input   de incremento   //////
                document.getElementById('seletorMetodo').onchange = function() {
                    var modo = this.value;
                        if(modo == "cifra" ){document.getElementById('incrementoDiv').style.display = "block";}
                        else if(modo== "base64") {
                            document.getElementById('incrementoDiv').style.display = "none";
                        }
                }
                ////////////////////// codificar e decodificar ////////////////////////
            function caesarCipher(event) {
                event.preventDefault();
                /////// variaveis recebidas do documento atraves dos campos input /////////
                var str = document.getElementById('inputTexto').value ;
                var num = document.getElementById('incremento').value ;
                 /////// (uso do modulo)caso o numero do index seja maior que o numero de itens no array , o modulo voltara para o primeiro item do array //////////
                num = num % 26;
                        var modo = document.getElementById('seletorMetodo').value;  
                        var encode = document.getElementById('seletorEncode').checked ;
                        var decode = document.getElementById('seletorDecode').checked ;
                /////////variaveis usadas na funcao //////////
                var lowerCaseStr = str.toLowerCase(); ////// transforma o input armazenado na var str em caixa baixa
                var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
                var newStr = ' ';
                ///////// o if e else if dinstigue o modo de operacao /////////
            if (modo == "cifra" & encode == true){
                for(var i = 0 ; i < lowerCaseStr.length; i++){ ///// loop em cada letra da var lowerCaseStr
                    var currentLetter = lowerCaseStr[i];
                    const especial = alphabet.includes(currentLetter) ;          ////// var que identifica characteres que nao pertencem a var alfabeto
                    if(currentLetter === ' ' || especial ===false) {            /////// if compara characteres e especiais e identifica espacos em branco
                        newStr += currentLetter ;                              //////// passa direto para o resultado final characteres especiais e espacos 
                        continue ;                                            /////////
                    }                                                        //////////
                    var currentIndex = alphabet.indexOf(currentLetter);     ///////////
                    var newIndex = currentIndex + num;                     //////////// soma a chave ao index atual
                    if(newIndex > 25) newIndex = newIndex - 26 ;          ///////////// operacao semelhantes ao modulo para evitar que um character se perca , caso o resultado do indice seja menor que 25 subtrai 26 e volta para o inicio do array
                    if(newIndex < 0) newIndex = newIndex + 26 ;          ////////////// leia o coment[ario] acima ..... caso o indice atual seja menor que o indice , soma 26 ie. -1 + 26 = 25 = Z[25] 
                    if(str[i] === str[i].toUpperCase()) {               /////////////// devolve o indice atual para upper case comparando com o indice atual da var str..
                        newStr += alphabet[newIndex].toUpperCase();    //////////////// adiciona uppercase a var newStr (resultado final) .
                    } else newStr += alphabet[newIndex];              ///////////////// passa lowercase direto 
                }
                document.getElementById('saida').textContent = `Codificação ficou ${newStr}` ;    ///////// envia ao navegador pelo html          
            } else if(modo == "cifra" & decode == true){       //////////////// distigue se o usuario quer codificar ou decodificar uma mensagem
                    for(var i = 0 ; i < lowerCaseStr.length; i++){
                        var currentLetter = lowerCaseStr[i];
                        const especial = alphabet.includes(currentLetter) ;
                        if(currentLetter === ' ' || especial ===false) {
                            newStr += currentLetter ;
                            continue ;
                        }
                        var currentIndex = alphabet.indexOf(currentLetter);
                        var newIndex = currentIndex - num; ///////////////////// subtrai a chave para decodificacao , unica mudanca substancial no codigo alem da condificao no else if statement
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
            /////////// gatilho cifra de caesar ////////////
            document.getElementById('submitBtn').addEventListener('click', caesarCipher);
            
            // Developed by Luis Felipe Macedo dos Santos LuisDevLipe.

            // 12/11/22
            
            // ヽ(•‿•)ノ .