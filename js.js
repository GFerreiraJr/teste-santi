//Armazenar dados do formulário em sessionStorege.
function AssignValues()
{
    sessionStorage.setItem("text1", document.form1.text1.value);
    sessionStorage.setItem("text2", document.form1.text2.value);
    sessionStorage.setItem("text3", document.form1.text3.value);
//Os dados não serão trados em bd.
    alert ("Sua mensagem foi enviada! Em breve entraremos em contato com você.")
};

//Copia linhas de uma tabela e replica em outra. 
function ExibirTabela()
{
    var row = document.getElementById("tbody");
    for (i = 0; i <= 9; i++) 
    {
        var vText = objWrite.innerHTML;
        objWrite.innerHTML = vText + i;
    }

}

//Seleciona números ímpares e os imprime em tela.
function NumerosImpares ()
{
    var objWrite = document.getElementById('teste');
    for (i = 100; i <= 200 ; i++) 
    { 
        if (i%2)
        {
            var vText = objWrite.innerHTML;
            objWrite.innerHTML =vText + i + ', ';
        }
}   }
