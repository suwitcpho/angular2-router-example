import {Component,OnInit} from '@angular/core';
@Component({
    selector:'my-home',
    templateUrl:'viewcomponent/home.html'
})
export /**
 * name
 */
class HomeComponent {
data:string[];
    constructor() {
        
    }
    ngOnInit(){
  this.data=['A','B','C'];
    }
}