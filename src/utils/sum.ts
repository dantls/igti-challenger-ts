interface gradesFormat{
  id: number;
  student: string;
  subject: string;
  type: string;
  value: number;
  timestamp:string;
}

export function sum(arr:gradesFormat[], student:string,subject:string){
    console.log(student);
    console.log(subject);
    const sum = arr.reduce((acc:number , grade) => {
      if(grade.subject === subject && grade.student === student){
        console.log(grade.subject)
        acc = grade.value;
      }
      return acc;
    },0);

    return {
      student,
      subject,
      sum
    }  
}
