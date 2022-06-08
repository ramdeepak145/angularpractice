import { Component, OnInit ,Input, OnChanges, SimpleChange, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-serve-element',
  templateUrl: './serve-element.component.html',
  styleUrls: ['./serve-element.component.css']
})
export class ServeElementComponent implements OnInit, OnChanges,OnDestroy{

 @Input('srvElement') element: {type: string,name: string,content: string};
 @Input() name:string;

  constructor() { 
    console.log("constructor called");
  }

  ngOnInit(): void {
  } 

  ngOnChanges(changes: any){
    console.log("ngOnchanges called");
    console.log(changes);
}
onChangeFirst(){
  this.element.name="Changed!";
}
ngOnDestroy(){
  console.log("ngOnDestroy called");
}

}
