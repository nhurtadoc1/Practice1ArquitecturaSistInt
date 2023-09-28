function TimeConvert12to24(input:string):string {
    if(input.length < 7  || input.length > 8) {
        throw new Error("String provided is the incorrect size to be a time notation");
    }
    let hour: number = Number(input.substring(0, input.length - 6));
    let minute: number = Number(input.substring(input.length - 5, input.length - 3));
    if(isNaN(hour) || isNaN(minute)) {
        throw new Error("Hour or minute provided is not a number");
    }
    if(input.substring(input.length - 6, input.length - 5) !== ":") {
        throw new Error("Time provided has no colon between the hours and minutes (and that's just sad)");
    }
    if(hour < 0 || hour > 12) {
        throw new Error("Hour is out of expected range (0 to 12)");
    }
    if(minute < 0 || minute > 59) {
        throw new Error("Minute is out of expected range (0 to 59)");
    }
    let matinas: string = input.substring(input.length - 2, input.length)
    if(matinas == "am" || matinas == "pm") {
        if(matinas == "am" && hour == 12) {
            hour = 0;
        } else if (matinas == "pm" && hour !== 12) {
            hour = hour + 12;
        }
    } else {
        throw new Error("Time lacks a proper matinas indicator (am or pm)");
    }
    let output: string = hour + ":" + minute;
    return output;
}

const Time12_1: string = "12:00 am";
try {
    console.log(TimeConvert12to24(Time12_1));
} catch(error) {
    console.log(error);
}