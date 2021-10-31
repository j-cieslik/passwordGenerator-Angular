import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
	length = 0;
	password = '';
	includeLetters = false;
	includeNumbers = false;
	includeSymbols = false;

	onChangeLength(value: string)
	{
		const parsedValue = parseInt(value);

		if (!isNaN(parsedValue))
		{
			this.length = parsedValue;
		}
	}

  onButtonClick()
	{
		const numbers = '1234567890';
		const letters = 'abcdefgijklmnoprstuvwyzx';
		const symbols = '!@#$%^&*()';

		let validChars = '';

		if (this.includeLetters)
		{
			validChars += letters;
		}

		if (this.includeNumbers)
		{
			validChars += numbers;			
		}

		if (this.includeSymbols)
		{
			validChars += symbols;
		}

		let generetedPassword = '';

		for (let i = 0; i < this.length; i++)
		{
			const index = Math.floor(Math.random() * validChars.length);
			generetedPassword += validChars[index];
		}

		this.password = generetedPassword;
	}

	onChangeUseLetters()
	{
		this.includeLetters = !this.includeLetters;
	}

	onChangeUseNumbers()
	{
		this.includeNumbers = !this.includeNumbers;
	}

	onChangeUseSymbols()
	{
		this.includeSymbols = !this.includeSymbols;
	}


	// getName()
	// {
	// 	return 'Alex';
	// }

	// getPassword()
	// {
	// 	return this.password;
	// }

}
