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
		expect(testVar).to.exist;
		expect(testVar).to.deep.equal({}); //without .deep, {} does not equal {}
		expect(testFunc).to.exist;
		expect(testFunc()).to.equal('hi');
	});
});

describe('index.html', () => {
	it('1) contains an p nested inside a div ', () => {
		expect(document.querySelector('div').outerHTML).to.match(
			/<p>[\s\S]*?<\/p>/
		);
	});

	it('2) contains an p nested inside a div ', () => {
		expect(document.querySelector('div').outerHTML).to.match(
			/<p>[\s\S]*?<\/p>/
		);
	});

	it('3) contains an p nested inside a div ', () => {
		expect(document.querySelector('div').outerHTML).to.match(
			/<p>[\s\S]*?<\/p>/
		);
	});

	it('4) contains an p nested inside a div ', () => {
		expect(document.querySelector('div').outerHTML).to.match(
			/<p>[\s\S]*?<\/p>/
		);
	});

	it('5) contains an p nested inside a div ', () => {
		expect(document.querySelector('div').outerHTML).to.match(
			/<p>[\s\S]*?<\/p>/
		);
	});

	it('6) contains an p nested inside a div ', () => {
		expect(document.querySelector('div').outerHTML).to.match(
			/<p>[\s\S]*?<\/p>/
		);
	});

	it('7) contains an p nested inside a div ', () => {
		expect(document.querySelector('div').outerHTML).to.match(
			/<p>[\s\S]*?<\/p>/
		);
	});

	it('8) contains an p nested inside a div ', () => {
		expect(document.querySelector('div').outerHTML).to.match(
			/<p>[\s\S]*?<\/p>/
		);
	});

	it('9) contains an p nested inside a div ', () => {
		expect(document.querySelector('div').outerHTML).to.match(
			/<p>[\s\S]*?<\/p>/
		);
	});

	it('10) contains an p nested inside a div ', () => {
		expect(document.querySelector('div').outerHTML).to.match(
			/<p>[\s\S]*?<\/p>/
		);
	});
});
