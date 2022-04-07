import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  
  goals: Goal[] = [
    new Goal (1, 'Read Rich Dad Poor Dad','Get to understand Financial intelligence',new Date(2022,5,2)),
    new Goal (2, 'Book a flight ticket','Flying to SA!!',new Date(2022,10,15)),
    new Goal (3,'Buy new phone','The old one is cracked',new Date(2022,4,25)),
    new Goal (4, 'Go hicking','To experience mother nature',new Date(2022,5,25)),
    new Goal (5, 'Do more code practise','For mastery',new Date(2022,3,6)),
    new Goal (6, 'Write a poem','Paper has more patience than people!!',new Date(2022,3,5)),
  ];
  toggleDetails(index: | number){
    this.goals[index].showDescription =!this.goals[index].showDescription;
  }
  deleteGoal(isComplete: boolean, index: number){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
      if (toDelete){
        this.goals.splice(index,1);
      }
     
    }
  }
  addNewGoal(goal:Goal){
    let goalLength =this.goals.length;
    goal.id =goalLength+1;
    goal.completeDate =new Date(goal.completeDate)
    this.goals.push(goal)
  }
  constructor() { }

  ngOnInit(){
  }

}
