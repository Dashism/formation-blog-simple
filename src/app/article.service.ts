import { Article } from './article';
import { Injectable } from '@angular/core';

const LIST_ARTICLES: Array<Article> = [
  {
    'id': 0,
    'title': 'Article n°1',
    // tslint:disable-next-line:max-line-length
    'content': 'Nunc consectetur convallis magna, vitae ornare enim laoreet a. Nulla facilisi. Pellentesque in arcu dapibus sapien vulputate tempor vel id magna. Curabitur in pulvinar augue. Fusce vitae volutpat mi. Curabitur lacinia placerat nulla ac suscipit. Etiam a facilisis magna. Morbi aliquam sem et vehicula fermentum. Morbi sit amet lobortis justo. Sed viverra dui id enim eleifend, ut aliquam velit finibus. Fusce vitae lorem tortor. Pellentesque vitae quam in velit ultrices convallis. Donec non est imperdiet, vulputate felis ut, luctus ipsum. Pellentesque lacinia non leo vitae efficitur.'
  }, {
    'id': 1,
    'title': 'Article n°2',
    // tslint:disable-next-line:max-line-length
    'content': 'Nunc consectetur convallis magna, vitae ornare enim laoreet a. Nulla facilisi. Pellentesque in arcu dapibus sapien vulputate tempor vel id magna. Curabitur in pulvinar augue. Fusce vitae volutpat mi. Curabitur lacinia placerat nulla ac suscipit. Etiam a facilisis magna. Morbi aliquam sem et vehicula fermentum. Morbi sit amet lobortis justo. Sed viverra dui id enim eleifend, ut aliquam velit finibus. Fusce vitae lorem tortor. Pellentesque vitae quam in velit ultrices convallis. Donec non est imperdiet, vulputate felis ut, luctus ipsum. Pellentesque lacinia non leo vitae efficitur.'
  }, {
    'id': 2,
    'title': 'Article n°3',
    // tslint:disable-next-line:max-line-length
    'content': 'Nunc consectetur convallis magna, vitae ornare enim laoreet a. Nulla facilisi. Pellentesque in arcu dapibus sapien vulputate tempor vel id magna. Curabitur in pulvinar augue. Fusce vitae volutpat mi. Curabitur lacinia placerat nulla ac suscipit. Etiam a facilisis magna. Morbi aliquam sem et vehicula fermentum. Morbi sit amet lobortis justo. Sed viverra dui id enim eleifend, ut aliquam velit finibus. Fusce vitae lorem tortor. Pellentesque vitae quam in velit ultrices convallis. Donec non est imperdiet, vulputate felis ut, luctus ipsum. Pellentesque lacinia non leo vitae efficitur.'
  }, {
    'id': 3,
    'title': 'Article n°4',
    // tslint:disable-next-line:max-line-length
    'content': 'Nunc consectetur convallis magna, vitae ornare enim laoreet a. Nulla facilisi. Pellentesque in arcu dapibus sapien vulputate tempor vel id magna. Curabitur in pulvinar augue. Fusce vitae volutpat mi. Curabitur lacinia placerat nulla ac suscipit. Etiam a facilisis magna. Morbi aliquam sem et vehicula fermentum. Morbi sit amet lobortis justo. Sed viverra dui id enim eleifend, ut aliquam velit finibus. Fusce vitae lorem tortor. Pellentesque vitae quam in velit ultrices convallis. Donec non est imperdiet, vulputate felis ut, luctus ipsum. Pellentesque lacinia non leo vitae efficitur.'
  }, {
    'id': 4,
    'title': 'Article n°5',
    // tslint:disable-next-line:max-line-length
    'content': 'Nunc consectetur convallis magna, vitae ornare enim laoreet a. Nulla facilisi. Pellentesque in arcu dapibus sapien vulputate tempor vel id magna. Curabitur in pulvinar augue. Fusce vitae volutpat mi. Curabitur lacinia placerat nulla ac suscipit. Etiam a facilisis magna. Morbi aliquam sem et vehicula fermentum. Morbi sit amet lobortis justo. Sed viverra dui id enim eleifend, ut aliquam velit finibus. Fusce vitae lorem tortor. Pellentesque vitae quam in velit ultrices convallis. Donec non est imperdiet, vulputate felis ut, luctus ipsum. Pellentesque lacinia non leo vitae efficitur.'
  }
];

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Array<Article>;

  constructor() {
    this.articles = new Array();
    this.articles.push(...LIST_ARTICLES);
  }

  public getAll(): Array<Article> {
    return this.articles;
  }

  public create(article: Article) {
    const newArticle = new Article(article.title,
      article.content,
      article.id);
    this.articles.push(newArticle);
  }

  public read(id: number): Article {
    const index = this.getIndex(id);
    if (index >= 0) {
      return this.articles[index];
    }
  }

  public update(article: Article) {
    const index = this.getIndex(article.id);
    const editArticle = new Article(article.title, article.content, article.id);
    if (index >= 0) {
      this.articles.splice(index, 1, editArticle);
    }
  }

  public delete(id: number) {
    const index = this.getIndex(id);
    if (index >= 0) {
      this.articles.splice(index, 1);
    }
  }

  private getIndex(id: number): number {
    return this.articles.findIndex(
      (article) => article.id === id
    );
  }
}
