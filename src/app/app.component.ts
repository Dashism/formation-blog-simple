import { Component } from '@angular/core';
import { Article } from './article';
import { NgForm } from '@angular/forms';

const LIST_ARTICLES: Array<Article> = [
  {
      "id": 0,
      "title": "Article n°1",
      "content": "Nunc consectetur convallis magna, vitae ornare enim laoreet a. Nulla facilisi. Pellentesque in arcu dapibus sapien vulputate tempor vel id magna. Curabitur in pulvinar augue. Fusce vitae volutpat mi. Curabitur lacinia placerat nulla ac suscipit. Etiam a facilisis magna. Morbi aliquam sem et vehicula fermentum. Morbi sit amet lobortis justo. Sed viverra dui id enim eleifend, ut aliquam velit finibus. Fusce vitae lorem tortor. Pellentesque vitae quam in velit ultrices convallis. Donec non est imperdiet, vulputate felis ut, luctus ipsum. Pellentesque lacinia non leo vitae efficitur."
  },{
      "id": 1,
      "title": "Article n°2",
      "content": "Nunc consectetur convallis magna, vitae ornare enim laoreet a. Nulla facilisi. Pellentesque in arcu dapibus sapien vulputate tempor vel id magna. Curabitur in pulvinar augue. Fusce vitae volutpat mi. Curabitur lacinia placerat nulla ac suscipit. Etiam a facilisis magna. Morbi aliquam sem et vehicula fermentum. Morbi sit amet lobortis justo. Sed viverra dui id enim eleifend, ut aliquam velit finibus. Fusce vitae lorem tortor. Pellentesque vitae quam in velit ultrices convallis. Donec non est imperdiet, vulputate felis ut, luctus ipsum. Pellentesque lacinia non leo vitae efficitur."
  },{
      "id": 2,
      "title": "Article n°3",
      "content": "Nunc consectetur convallis magna, vitae ornare enim laoreet a. Nulla facilisi. Pellentesque in arcu dapibus sapien vulputate tempor vel id magna. Curabitur in pulvinar augue. Fusce vitae volutpat mi. Curabitur lacinia placerat nulla ac suscipit. Etiam a facilisis magna. Morbi aliquam sem et vehicula fermentum. Morbi sit amet lobortis justo. Sed viverra dui id enim eleifend, ut aliquam velit finibus. Fusce vitae lorem tortor. Pellentesque vitae quam in velit ultrices convallis. Donec non est imperdiet, vulputate felis ut, luctus ipsum. Pellentesque lacinia non leo vitae efficitur."
  },{
      "id": 3,
      "title": "Article n°4",
      "content": "Nunc consectetur convallis magna, vitae ornare enim laoreet a. Nulla facilisi. Pellentesque in arcu dapibus sapien vulputate tempor vel id magna. Curabitur in pulvinar augue. Fusce vitae volutpat mi. Curabitur lacinia placerat nulla ac suscipit. Etiam a facilisis magna. Morbi aliquam sem et vehicula fermentum. Morbi sit amet lobortis justo. Sed viverra dui id enim eleifend, ut aliquam velit finibus. Fusce vitae lorem tortor. Pellentesque vitae quam in velit ultrices convallis. Donec non est imperdiet, vulputate felis ut, luctus ipsum. Pellentesque lacinia non leo vitae efficitur."
  },{
      "id": 4,
      "title": "Article n°5",
      "content": "Nunc consectetur convallis magna, vitae ornare enim laoreet a. Nulla facilisi. Pellentesque in arcu dapibus sapien vulputate tempor vel id magna. Curabitur in pulvinar augue. Fusce vitae volutpat mi. Curabitur lacinia placerat nulla ac suscipit. Etiam a facilisis magna. Morbi aliquam sem et vehicula fermentum. Morbi sit amet lobortis justo. Sed viverra dui id enim eleifend, ut aliquam velit finibus. Fusce vitae lorem tortor. Pellentesque vitae quam in velit ultrices convallis. Donec non est imperdiet, vulputate felis ut, luctus ipsum. Pellentesque lacinia non leo vitae efficitur."
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  articles: Array<Article>;
  isList: boolean;
  modelArticle: Article;

  constructor() {
    this.title = 'blog';
    this.articles = new Array();
    this.articles.push(...LIST_ARTICLES);
    this.isList = true;
    this.modelArticle = new Article('', '');
  }

  swapDisplay() {
    this.isList = !this.isList;
  }

  validateForm(myForm: NgForm) {
    // Ajout du nouvel article à la liste.
    // Attention : il faut séparer les instances
    // entre l'objet dans la liste et l'objet
    // dans le formulaire.
    this.articles.push(
      new Article(this.modelArticle.title,
        this.modelArticle.content));
    myForm.resetForm(new Article('', ''));
  }
}
