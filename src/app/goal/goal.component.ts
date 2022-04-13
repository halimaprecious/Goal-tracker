import { AlertService } from './../alert-service/alert.service';
import { GoalService } from './../goal-service/goal.service';
// import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  
  goals: Goal[] = [];
  alertService!: AlertService;

  toggleDetails(index:number){
    this.goals[index].showDescription =!this.goals[index].showDescription;
  }
  deleteGoal(isComplete: boolean, index: number){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
      if (toDelete){
        this.goals.splice(index,1);
        // alert method from alert service displays the message after user deletes a goal.
        this.alertService.alertMe("The goal has been deleted")
      }
     
    }
  }
  addNewGoal(goal:Goal){
    let goalLength =this.goals.length;
    goal.id =goalLength+1;
    goal.completeDate =new Date(goal.completeDate)
    this.goals.push(goal)
  }
  // makes the services available in the component
  constructor(GoalService:GoalService, alertService:AlertService) { 
    this.goals =GoalService.getGoals();
    // instantiate the service into th constractor
    this.alertService=alertService;
  }

  ngOnInit(){
  }

}
