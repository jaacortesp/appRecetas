import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpoonacularService {
  private apiKey: string = '38decb76137e46668dff7aa0c9ffdf31';
  private apiUrl: string = 'https://api.spoonacular.com';

  constructor(private http: HttpClient) {}

  searchRecipes(query: string): Observable<any> {
    const url = `${this.apiUrl}/recipes/complexSearch?query=${query}&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getRecipeInformation(id: number): Observable<any> {
    const url = `${this.apiUrl}/recipes/${id}/information?apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getRecipe(id: number): Observable<any> {
    const url = `${this.apiUrl}/recipes/${id}/information?apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
