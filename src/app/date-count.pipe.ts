import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date =new Date(); //get current date and time

    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())

    var dateDifference = Math.abs(value -todayWithNoTime) //returnss value in miliseconds

    const secondsInDay = 86400; //60sec *60mins in an hour *24 hours in a day

    var dateDifferenceSeconds = dateDifference*0.001; //converts milisecs to seconds

    var dateCounter =dateDifferenceSeconds/secondsInDay;

    if(dateCounter >= 1 && value > todayWithNoTime){
      return dateCounter;
    }else{
      return 0;
    }
  }

}
