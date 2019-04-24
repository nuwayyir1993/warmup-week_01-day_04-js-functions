const leapyear=function(year){
    if (year%4==0 && year%100 !=0)
      return ("leapyear");
     else if (year%400==0)
      return ("leap year");
    else 
    return ("not leap year");
    }