import {Request, Response} from 'express'
import {promises as fs} from 'fs';
import path from 'path';

const archive = path.resolve(__dirname,'..','..', 'grades.json');

export default class GradesController{
  async create(request: Request , response: Response){
    const { student, subject, type ,value }= request.body;

    let data = JSON.parse((await fs.readFile(archive)).toString());
    
    const newGrade = {id:data.nextId , ...{student, subject,type, value, timestamp: new Date()} }
    
    data.grades.push(newGrade);

    data = {nextId: data.nextId++, ...data }

    await fs.writeFile(archive, JSON.stringify(data, null, 2));

    response.json(data)


  }
}