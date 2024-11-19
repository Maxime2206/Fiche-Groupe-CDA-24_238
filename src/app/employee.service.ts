import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() {}

  getEmployees() {
    return [
      { name: 'François', skills: ['Python', 'perl', 'C++'], role: 'Formateur' },
      { name: 'Manu', skills: ['Prolog', 'C', 'PHP'], role: 'Formateur' },
      { name: 'Yannick', skills: ['Prolog', 'C++', 'PHP'], role: 'Formateur itinérant' },
      { name: 'Maxime', skills: ['React', 'JS', 'SQL', 'CSS'], role: 'stagiaire' },
      { name: 'Logan', skills: ['React', 'Node', 'PHP'], role: 'stagiaire' },
      { name: 'Fabrice', skills: ['PHP', 'SCSS', 'CSS'], role: 'stagiaire' },
      { name: 'Mickael Lachevre', skills: ['CSS', 'JS', 'PHP'], role: 'stagiaire' },
      { name: 'Loic', skills: ['PHP', 'SQL', 'HTML'], role: 'stagiaire' },
      { name: 'Tony', skills: ['Python', 'PHP', 'SQL'], role: 'stagiaire' },
      { name: 'Ibrahima', skills: ['SQL', 'CSS', 'PHP'], role: 'stagiaire' },
      { name: 'Sara', skills: ['PHP', 'CSS', 'HTML', 'JS', 'SQL'], role: 'stagiaire' },
      { name: 'Mickael Breant', skills: ['PHP', 'CSS'], role: 'stagiaire' },
    ];
  }
}
