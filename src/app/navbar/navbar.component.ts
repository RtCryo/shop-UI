import { Component, OnInit } from '@angular/core';
import { Category } from '../_model/category';
import { CategoryService } from '../_service/category.service';
import { NavbarService } from '../_service/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  email: string = "email@web.de";
  adText: string = "Free delivery – orders over $50";
  categories!: Category[];
  status: string = "Home";

  constructor(private categoryService: CategoryService) {

  }

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe({
      next: (category) => {
        this.categories = category;
      }
    })
  }

  selectMenu(menu: string){
    this.status = menu;
  }

}
