var Numero = document.getElementById("NumeritoPro").value;
var Numero_In = Numero;
var Numero_aux = Numero_In; 
var Base_Inicial=2, Base_Final= 16;
//var Tamaño_Arr= 8;
var i=0;
var Residuo = [];
var Numero_String =[];
var NumeroSplit = [];
var Bandera= false;
var Residuo_cadena=[];
var p;

function main() {
    for(base=2;base<=16;base++){//Bases
        Numero_In=Numero_aux;
        Numero_String =[];
        NumeroSplit =[];
        for(i = 10 ;i>=0; i--)//Cantidad de "bits"
        {
            if(base>=10){
                Residuo[i] = Numero_In % base;
                hexString = letras(Residuo[i]);
                Residuo[i]= hexString;
            }
            else{
                Residuo[i] = Numero_In % base;
            }
            Numero_In = Math.trunc(Numero_In/base);           
        }
        Residuo_cadena = Residuo.join('');
        console.log("Residuo:",Residuo_cadena);   
        Residuo_cadena = Residuo_cadena.split();
        var x= Number(Residuo_cadena);
        console.log("Base[",base,"]",x);
    }        
}
main();
function letras(Numero_In) 
{
    var Numero_Letras="";
    if(Numero_In == 10)
    {
        Numero_Letras = "A";
    }
    else if(Numero_In == 11)
    {
        Numero_Letras = "B";
    }
    else if(Numero_In == 12)
    {
        Numero_Letras = "C";
    }
    else if(Numero_In == 13)
    {
        Numero_Letras = "D";
    }
    else if(Numero_In == 14)
    {
        Numero_Letras = "E";
    }
    else if(Numero_In == 15)
    {
        Numero_Letras = "F";
    }
    else{
        return Numero_In;
    }
    return Numero_Letras;
    
}