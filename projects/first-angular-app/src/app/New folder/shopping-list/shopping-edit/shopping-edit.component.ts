import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output,
  OnDestroy
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  // @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  // constructor() { }

  // ngOnInit() {
  // }

  // onAddItem() {
  //   const ingName = this.nameInputRef.nativeElement.value;
  //   const ingAmount = this.amountInputRef.nativeElement.value;
  //   const newIngredient = new Ingredient(ingName, ingAmount);
  //   this.ingredientAdded.emit(newIngredient);
  // }

  // using service
  /*
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  constructor(private shoppinglistService:ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppinglistService.addIngredient(newIngredient);
  }
 */

 // using form
 subscription: Subscription;
 editMode = false;
 editedItemIndex: number;
 editedItem: Ingredient;
 @ViewChild('f') shoppingListForm: NgForm;
  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppinglistService.startedEditing
    .subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppinglistService.getIngredient(index);
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  onSubmit(form: NgForm): void{
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppinglistService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppinglistService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.shoppingListForm.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onClear(): void {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete(): void {
    this.shoppinglistService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
}
