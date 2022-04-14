import { AlertService } from './../alert-service/alert.service';
import { GoalService } from './../goal-service/goal.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { Quote } from '../quote-class/quote';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  
  goals: Goal[] = [];
  alertService!: AlertService;
  quote!: Quote;

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
  constructor(GoalService:GoalService, alertService:AlertService, private http:HttpClient) { 
    this.goals =GoalService.getGoals();
    // instantiate the service into th constractor
    this.alertService=alertService;
  }

  ngOnInit(){
    interface ApiResponse{
      author:string;
      quote:string;
    }
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      //successful API request
      this.quote =new Quote(data.author,data.quote)
    })
  }

}
