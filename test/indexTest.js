//passing test examples
describe('index.html', () => {
	it("includes 'hello' in the body", () => {
		expect(
			document.querySelector('body').innerHTML,
			'the body does not contain "hello"'
		).to.include('hello');
	});

	it('includes an empty div in the body', () => {
		expect(
			document.querySelector('body').innerHTML,
			'no empty div element found within body'
		).to.include('<div></div>');
		//for more general HTML tests, use match()
	});
});

//passing test examples
describe('index.js', () => {
	it('includes example test variables', () => {
		expect(testVar, 'testVar was not found').to.exist;
		expect(testVar, 'testVar did not equal {}').to.deep.equal({}); //without .deep, {} does not equal {}
		expect(testFunc, 'testFunc was not found').to.exist;
		expect(testFunc(), 'testFunc did not return').to.equal('hi');
	});
});

describe('index.html', () => {
	it('contains an p nested inside a div ', () => {
		expect(
			document.querySelector('div').outerHTML,
			'No p tag was found inside a div'
		).to.match(/<p>[\s\S]*?<\/p>/);
	});

	it('contains an p nested inside a div ', () => {
		expect(
			document.querySelector('div').outerHTML,
			'No p tag was found inside a div'
		).to.match(/<p>[\s\S]*?<\/p>/);
	});

	it('contains an p nested inside a div ', () => {
		expect(
			document.querySelector('div').outerHTML,
			'No p tag was found inside a div'
		).to.match(/<p>[\s\S]*?<\/p>/);
	});

	it('contains an p nested inside a div ', () => {
		expect(
			document.querySelector('div').outerHTML,
			'No p tag was found inside a div'
		).to.match(/<p>[\s\S]*?<\/p>/);
	});

	it('contains an p nested inside a div ', () => {
		expect(
			document.querySelector('div').outerHTML,
			'No p tag was found inside a div'
		).to.match(/<p>[\s\S]*?<\/p>/);
	});

	it('contains an p nested inside a div ', () => {
		expect(
			document.querySelector('div').outerHTML,
			'No p tag was found inside a div'
		).to.match(/<p>[\s\S]*?<\/p>/);
	});

	it('contains an p nested inside a div ', () => {
		expect(
			document.querySelector('div').outerHTML,
			'No p tag was found inside a div'
		).to.match(/<p>[\s\S]*?<\/p>/);
	});

	it('contains an p nested inside a div ', () => {
		expect(
			document.querySelector('div').outerHTML,
			'No p tag was found inside a div'
		).to.match(/<p>[\s\S]*?<\/p>/);
	});

	it('contains an p nested inside a div ', () => {
		expect(
			document.querySelector('div').outerHTML,
			'No p tag was found inside a div'
		).to.match(/<p>[\s\S]*?<\/p>/);
	});

	it('1contains an p nested inside a div ', () => {
		expect(
			document.querySelector('div').outerHTML,
			'No p tag was found inside a div'
		).to.match(/<p>[\s\S]*?<\/p>/);
	});
});
