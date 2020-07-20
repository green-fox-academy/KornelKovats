function timeConversion(s) {
    /*
     * Write your code here.
     */

    let arr= s.split(":");
    let hour = arr[0];
    let minute = arr[1];
    let sec = arr[2].slice(0,2);
    let whichPartofTheday = arr[2].slice(2,4);

    if(whichPartofTheday=='PM'){
        if(arr[0]=='12'){
            let string = hour + ':'+ minute + ':' + sec;
            return string;
        }else{
            hour = (Number(hour)+12).toString();
            let string = hour + ':'+ minute + ':' + sec;
            return string;
        }
    }else if(whichPartofTheday=='AM'){
        if(hour=='12'){
            return "00" + ":"+ minute + ':' + sec;
        }else{
            let string = hour.toString() + ':'+ minute + ':' + sec;
            console.log(string);
            return string;
        }
    }




}