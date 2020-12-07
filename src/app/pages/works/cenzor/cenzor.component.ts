import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {
  badWord = '';
  badWords = '';
  text = '';
  textWords = '';
  arrWordsFromText: Array<string> = [];
  arrBadWords: Array<string> = [];
  wordValidation = true;
  wordValidmessage = 'words here...';
  textValidation = true;
  textValidMessage = 'text here...';
  cenzor = '';
  index: number;
  value = '';
  constructor() { }

  ngOnInit(): void {
  }
  checkInputField(invalidMessage: string, defaultMessage: string): boolean {
    if (this.badWord == '') {
      this.wordValidation = false;
      this.wordValidmessage = invalidMessage;
      return false;
    }
    else {
      this.wordValidation = true;
      this.wordValidmessage = defaultMessage;
    }
    return true;
  }
  checkTextInputField(invalidMessage: string, defaultMessage: string): boolean {
    if (this.textWords == '') {
      this.textValidation = false;
      this.textValidMessage = invalidMessage;
      return false;
    }
    else {
      this.textValidation = true;
      this.textValidMessage = defaultMessage;
    }
    return true;
  }
  addBadWords(): string {
    if (this.checkInputField('Please write a word!', 'words here...')) {
      if (this.badWords === '') {
        this.badWords += this.badWord;
        this.badWord = '';
        this.wordValidation = true;
      }
      else {
        this.badWords += ',' + ' ' + this.badWord;
        this.badWord = '';
        this.wordValidation = true;
      }
      return this.badWords;
    }
  }
  getArrBadWords(): Array<string> {
    if (this.checkInputField('Please write a word!', 'words here...')) {
      this.arrBadWords.push(this.badWord);
      return this.arrBadWords;
    }
  }
  resetBadWords(): void {
    this.wordValidation = true;
    this.wordValidmessage = 'words here...';
    this.badWords = '';
    this.arrBadWords = [];
  }
  getBadWords(): void {
    this.arrWordsFromText = this.textWords.split(' ');
    this.arrBadWords.forEach(value => {
      this.arrWordsFromText.forEach(element => {
        this.index = this.arrWordsFromText.indexOf(element);
        if (value.toUpperCase() === element.toUpperCase()) {
          let i = 0;
          while (i < element.length) {
            this.cenzor += '*';
            i++;
          }
          this.arrWordsFromText.splice(this.index, 1, this.cenzor);
        }
        this.cenzor = '';
      });
    });
    this.value = '';
    this.arrWordsFromText.forEach(element => this.value += element + ' ');
  }
  cenzorText(): void {
    if (this.checkTextInputField('Please write a text!', 'text here...')){
      this.getBadWords();
      this.textValidation = true;
    }
  }
}