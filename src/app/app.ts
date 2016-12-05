import {Component, Veiw, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'app'
})
@View({
  template: '<h1>Hello {{name}}</h1>'
})
class AppComponent {
  name: string;

  constructor(){
    this.name = 'Name';
  }
}

bootstrap(AppComponent);
