//If Else condition in JS
const age=18;

// sign == will only compsre the value of variable not the type of variable
if(age==18){
console.log("Age is 18");
}

else if(age==64){
    console.log("Age is 64");  
}

else
{
    console.log("Age is unwanted");  

}

const agee='50';


// sign === will compare the value of variable and the type of variable
if(agee==18){
    console.log("Age is 18");
    }
    
    else if(agee===50){
        console.log("Age is 50");  
    }
    
    else
    {
        console.log("Age is unwanted");  
    
    }



    //Ternary OPerator

    console.log(age==18? 'You can drive' : 'You cannot drive');


//Switch case statement
switch(age){
      case 18:
        console.log('Age is 18');
        break;

        case 25:
        console.log('Age is 25');
        break;

        case 65:
        console.log('Age is 65');
        break;

        case 80:
        console.log('Age is 80');
        break;

        default:
            console.log('age is unwanted');
            break;







}




















