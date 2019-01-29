// Extention reverse method to String
String.prototype.reverse = function() {
	return Array.from(this).reverse().join("");
};

// Extention blank method to check blank string
String.prototype.blank = function() {
	return this.replace(/^\s*/g, '').length === 0
}

// Extention last method to get last element of array
Array.prototype.last = function() {
	return this.slice(-1)[0];
}

// init
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}
TranslatedPhrase.prototype = new Phrase();

