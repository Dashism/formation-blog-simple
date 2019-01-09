import { Component } from '@angular/core';
import { Article } from './article';
import { NgForm } from '@angular/forms';

const LIST_ARTICLES: Array<Article> = [
  {
    "id": 0,
    "title": "Article n°1",
    "content": "Nunc consectetur convallis magna, vitae ornare enim laoreet a. Nulla facilisi. Pellentesque in arcu dapibus sapien vulputate tempor vel id magna. Curabitur in pulvinar augue. Fusce vitae volutpat mi. Curabitur lacinia placerat nulla ac suscipit. Etiam a facilisis magna. Morbi aliquam sem et vehicula fermentum. Morbi sit amet lobortis justo. Sed viverra dui id enim eleifend, ut aliquam velit finibus. Fusce vitae lorem tortor. Pellentesque vitae quam in velit ultrices convallis. Donec non est imperdiet, vulputate felis ut, luctus ipsum. Pellentesque lacinia non leo vitae efficitur."
  }, {
    "id": 1,
    "title": "Article n°2",
    "content": "Nunc consectetur convallis magna, vitae ornare enim laoreet a. Nulla facilisi. Pellentesque in arcu dapibus sapien vulputate tempor vel id magna. Curabitur in pulvinar augue. Fusce vitae volutpat mi. Curabitur lacinia placerat nulla ac suscipit. Etiam a facilisis magna. Morbi aliquam sem et vehicula fermentum. Morbi sit amet lobortis justo. Sed viverra dui id enim eleifend, ut aliquam velit finibus. Fusce vitae lorem tortor. Pellentesque vitae quam in velit ultrices convallis. Donec non est imperdiet, vulputate felis ut, luctus ipsum. Pellentesque lacinia non leo vitae efficitur."
  }, {
    "id": 2,
    "title": "Article n°3",
    "content": "Nunc consectetur convallis magna, vitae ornare enim laoreet a. Nulla facilisi. Pellentesque in arcu dapibus sapien vulputate tempor vel id magna. Curabitur in pulvinar augue. Fusce vitae volutpat mi. Curabitur lacinia placerat nulla ac suscipit. Etiam a facilisis magna. Morbi aliquam sem et vehicula fermentum. Morbi sit amet lobortis justo. Sed viverra dui id enim eleifend, ut aliquam velit finibus. Fusce vitae lorem tortor. Pellentesque vitae quam in velit ultrices convallis. Donec non est imperdiet, vulputate felis ut, luctus ipsum. Pellentesque lacinia non leo vitae efficitur."
  }, {
    "id": 3,
    "title": "Article n°4",
    "content": "Nunc consectetur convallis magna, vitae ornare enim laoreet a. Nulla facilisi. Pellentesque in arcu dapibus sapien vulputate tempor vel id magna. Curabitur in pulvinar augue. Fusce vitae volutpat mi. Curabitur lacinia placerat nulla ac suscipit. Etiam a facilisis magna. Morbi aliquam sem et vehicula fermentum. Morbi sit amet lobortis justo. Sed viverra dui id enim eleifend, ut aliquam velit finibus. Fusce vitae lorem tortor. Pellentesque vitae quam in velit ultrices convallis. Donec non est imperdiet, vulputate felis ut, luctus ipsum. Pellentesque lacinia non leo vitae efficitur."
  }, {
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
  isEdit: boolean;
  modelArticle: Article;

  constructor() {
    this.title = 'blog';
    this.articles = new Array();
    this.articles.push(...LIST_ARTICLES);
    this.isList = true;
    this.isEdit = false;
    this.modelArticle = new Article('', '');
  }

  swapDisplay() {
    this.isList = !this.isList;
  }

  validateForm(myForm: NgForm) {
    // On construit une nouvelle instance pour l'article créé ou modifié.
    // Attention : il faut séparer les instances entre l'objet dans la liste
    // et l'objet dans le formulaire.
    const newArticle = new Article(this.modelArticle.title,
      this.modelArticle.content,
      this.modelArticle.id);
    // Si on est en édition.
    if (this.isEdit) {
      // Je recherche ou est l'article à remplacer dans le tableau.
      const index = this.articles.findIndex(
        (article: Article) => article.id === newArticle.id
      );
      // Si l'article est trouvé, c'est à dire si l'index obtenu
      // ne vaut pas -1 mais une valeur positive.
      if (index >= 0) {
        // Le 3eme argument de splice est le nouvel élément à mettre
        // à la place de celui qui est supprimé.
        this.articles.splice(index, 1, newArticle);
      }
      // On repasse en mode création.
      this.isEdit = false;
    } else {
      // Sinon ajout du nouvel article à la liste.
      this.articles.push(newArticle);
    }
    myForm.resetForm(new Article('', ''));
  }

  delete(id: number) {
    const index = this.articles.findIndex(
      (article: Article) => article.id === id
    );
    if (index >= 0) {
      this.articles.splice(index, 1);
    }
  }

  edit(article: Article) {
    // On passe en mode édition.
    this.isEdit = true;
    // On charge l'article dans le formulaire.
    this.modelArticle = new Article(article.title, article.content, article.id);
    // On bascule vers l'affichage du form.
    this.swapDisplay();
  }
}
