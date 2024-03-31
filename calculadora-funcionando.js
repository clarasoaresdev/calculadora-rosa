function insert(num)
{
    var numero = document.getElementById('calculadora-resultado').innerHTML;
    document.getElementById('calculadora-resultado').innerHTML = numero+num;
}
function clean()
{
    document.getElementById('calculadora-resultado').innerHTML = "";
}

function back()
{
    var resultado = document.getElementById('calculadora-resultado').innerHTML;
    document.getElementById('calculadora-resultado').innerHTML = resultado.slice(0, -1); 
}

function calcular()
{
    var resultado = document.getElementById('calculadora-resultado').innerHTML;
        if(resultado)
        {
            document.getElementById('calculadora-resultado').innerHTML = eval(resultado);
        }
        else
        {
            document.getElementById('calculadora-resultado').innerHTML = "Nada para calcular;-;"
        }
}