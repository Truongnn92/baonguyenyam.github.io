import {
  Component,
  OnInit
} from 'angular2/core';

@Component({
  selector: '<%= name %>',
  template: require('./<%= name %>.jade'),
  // styles: [require('./<%= name %>.scss')],
  providers: [],
  directives: [],
  pipes: []
})
export class <%= name %> implements OnInit {

  // constructor() {

  // }

  ngOnInit() {
    console.log();
  }


  // ngOnChanges(){}
  // ngOnInit() { }
  // ngDoCheck() { }
  // ngAfterContentInit() { }
  // ngAfterContentChecked() { }
  // ngAfterViewInit() { }
  // ngAfterViewChecked() { }
  // ngOnDestroy() { }
  
  
}
