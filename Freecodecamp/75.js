function chainToSwitch(val){
    var answer ="";
    switch(val){
        case "Bob":
            answer = "Marley";
            break;
            case 42:
                answer ="The Answer";
                break;
                case 1:
                    answer ="There is no #1"
                    break;
                    case 99:
                        answer ="Miss me by this much";
                        break;
                        case 7:
                            answer ="Ate Nine";
                            break;

    }
    return answer;
}
console.log(chainToSwitch(1));