function TimeConvert12to24(input:string, acceptJpHour?:boolean):string {
    if(input.length < 7  || input.length > 8) {
        throw new Error("String provided is the incorrect size to be a time notation");
    }
    let hour: number = Number(input.substring(0, input.length - 6));
    let minuteString: string = input.substring(input.length - 5, input.length - 3);
    let minute: number = Number(minuteString);
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
    if(hour === 0 && acceptJpHour !== true) {
        throw new Error("Time provided only exists in Japanese common usage. This error can be avoided by setting acceptJpHour to true");
    }
    let meridiem: string = input.substring(input.length - 2, input.length)
    if(meridiem == "am" || meridiem == "pm") {
        if(meridiem == "am" && hour == 12) {
            hour = 0;
        } else if (meridiem == "pm" && hour !== 12) {
            hour = hour + 12;
        }
    } else {
        throw new Error("Time lacks a proper meridiem indicator (am or pm)");
    }
    if (hour < 10) {
        let output: string = "0" + hour + ":" + minuteString;
        return output;
    } else {
        let output: string = hour + ":" + minuteString;
        return output;
    }
}

const Time12_1: string = "12:39 ax";
try {
    console.log(TimeConvert12to24(Time12_1, false));
} catch(error) {
    console.log(error);
}
