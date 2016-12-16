import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";

import {SharedModule} from "../shared/shared.module";
import {RecipesComponent} from "./recipes.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeStartComponent} from "./recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipesRouting} from "./recipes.routing";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RecipesRouting
  ]
})
export class RecipesModule {}
