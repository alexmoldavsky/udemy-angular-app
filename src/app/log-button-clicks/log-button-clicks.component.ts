import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs';

@Component({
	selector: 'app-log-button-clicks',
	templateUrl: './log-button-clicks.component.html',
//	styleUrls: ['./log-button-clicks.component.scss'],
	styles: [`active {
		color: blue;
	}`]	
})
export class LogButtonClicksComponent implements OnInit {


	buttonClicked: boolean = false;

	buttonCaption: string = 'Show';

	clicksArr: Array<any> = [];

	clicksCnt: number = 0;

	constructor() { }

	ngOnInit() {
	}

	onButtonClick() {
		this.buttonClicked = !this.buttonClicked;
		this.buttonCaption = this.buttonClicked ? 'Hide' : 'Show';
		this.clicksCnt++;
		let dt = new Date();
		this.clicksArr.push(dt);
	} 

	getBackground(id: number): string {
		return id >= 4 ? 'blue' : 'none'
	}

	
  

}
