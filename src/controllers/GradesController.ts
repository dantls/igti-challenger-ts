import {Request, Response} from 'express'
import {promises as fs} from 'fs';
import path from 'path';

const archive = path.resolve(__dirname,'..','..', 'grades.json');

interface gradesFormat{
  id: number;
  student: string;
  subject: string;
  type: string;
  value: number;
  timestamp:Date;
}

export default class GradesController{
  async create(request: Request , response: Response){

    try {
      const grade = request.body;

      const data = JSON.parse((await fs.readFile(archive)).toString());
      
      data.nextId++;

      data.grades.push({
        id:data.nextId,
        timestamp: new Date(),
        ...grade
      });

      await fs.writeFile(archive, JSON.stringify(data, null, 2));

      response.json(grade);
    } catch (error) {
      response.status(400).json({error: error.message}); 
    }

  }
  async update(request: Request , response: Response){
    try {
      const {id} = request.params;
      const grade = request.body;

      const data = JSON.parse((await fs.readFile(archive)).toString());
      const index = data.grades.findIndex((grade: gradesFormat ) => grade.id === Number(id));

      if(!(index>=0)){
        console.log(index);
        throw new Error("Grade doesn't found.");
      }

      data.grades[index] = {...data.grades[index] , ...grade};

      await fs.writeFile(archive, JSON.stringify(data, null, 2));

      response.json(grade);
    } catch (error) {
      response.status(400).json({error: "Grade not found."}); 
    }
  }
  async delete(request: Request , response: Response){
    try {
      const {id} = request.params;

      const data = JSON.parse((await fs.readFile(archive)).toString());
      console.log(data);
      const index = data.grades.findIndex((grade: gradesFormat ) => grade.id === Number(id));

      if(!(index>=0)){
        console.log(index);
        throw new Error("Grade doesn't found.");
      }

      data.grades = data.grades.filter((grade:gradesFormat)=>grade.id !== Number(id));
      
      await fs.writeFile(archive, JSON.stringify(data, null, 2));

      response.status(200).json({message: "Deleted"});
    } catch (error) {
      response.status(400).json({error: "Grade not found."}); 
    }
  }
  async index(request: Request , response: Response){
    try {
      const {id} = request.params;

      const data = JSON.parse((await fs.readFile(archive)).toString());
      const grade = data.grades.find((grade: gradesFormat ) => grade.id === Number(id));

      if(!grade){
        throw new Error("Grade doesn't found.");
      }
      response.json(grade);
    } catch (error) {
      response.status(400).json({error: "Grade not found."}); 
    }
  }
  
}