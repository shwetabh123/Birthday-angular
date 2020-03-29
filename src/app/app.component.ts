import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Birthday-Calender';
items = ["", "", "",""];
  items2 = ["", "", "",""];
newItem = "";
  newItem2= "";
  todayBirthday = false;

  function ($scope){
    $scope.friends=[
    {name:'Pete',birthDate:"12/25/1983"},
    {name:'Sarah',birthDate:"02/14/1985"},
    {name:'James',birthDate:"01/15"},
    {name:'Lilly',birthDate:"04/01/1975"},
    {name:'John',birthDate:"08/07/1955"},
 ]

 $scope.friends.forEach(function(data){
      var day = data.split("/");
      var currentYear = new Date().getFullYear();
      var birthdayDate = new Date(currentYear, day[0] - 1, day[1])
      var now = new Date().valueOf();
      if (birthdayDate.valueOf() < now){ 
          birthdayDate.setFullYear(currentYear+1)
      }
      data.fromNow= birthdayDate.valueOf() - now;
  })}


 onlyToday = function(friend) {
var today = new Date();
 if(friend.birthDate.getDate() === today.getDate() && friend.birthDate.getMonth() === today.getMonth())
return friend.name;
  else
    return friend.name;
}
pushName = function() {
if(this.newItem != "")
{
    this.items.push(this.newItem);
 this.newItem = "";
  }
}
pushDOB = function() {
  if(this.newItem2 != "")
  {
this.items2.push(this.newItem2);
this.newItem2 = "";
}
}


deleteName = function(index) {


  this.items.splice(index,1);

}

deleteDOB = function(index) {


  this.items2.splice(index,1);

}


}