import { ArticleService } from './article.service';
import { Component } from '@angular/core';
import { Article } from './article';
import { NgForm } from '@angular/forms';

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

  constructor(private service: ArticleService) {
    this.title = 'blog';
    this.articles = this.service.getAll();
    this.isList = true;
    this.isEdit = false;
    this.modelArticle = new Article('', '');
  }

  swapDisplay() {
    this.isList = !this.isList;
  }

  validateForm(myForm: NgForm) {
    // Si on est en édition.
    if (this.isEdit) {
      this.service.update(this.modelArticle);
      // On repasse en mode création.
      this.isEdit = false;
    } else {
      // Sinon ajout du nouvel article à la liste.
      this.service.create(this.modelArticle);
    }
    myForm.resetForm(new Article('', ''));
  }

  delete(id: number) {
    this.service.delete(id);
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
