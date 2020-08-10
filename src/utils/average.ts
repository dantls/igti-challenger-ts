interface gradesFormat{
  id: number;
  student: string;
  subject: string;
  type: string;
  value: number;
  timestamp:string;
}

export function average(arr:gradesFormat[], type:string,subject:string){
    const avg = arr.reduce((acc:number , grade, index:number, arr:gradesFormat[]) => {
      if(grade.subject === subject && grade.type === type){
        acc.sum = grade.value;
        acc.avg++;
      }
      if(index === arr.length-1){
        return acc.sum / acc.avg;
      }
      return acc;
    },{sum:0 , avg:0});
    return {
      type,
      subject,
      avg
    }  
}
