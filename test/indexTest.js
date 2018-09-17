describe('index.html', () => {
	it("includes 'hello' in the body", () => {
		expect(document.querySelector('body').innerHTML).to.include('hello');
	});

	it('includes an empty div in the body', () => {
		expect(
			document.querySelector('body').innerHTML,
			'no empty div element found within body'
		).to.include('<div></div>');
		//for more general HTML tests, use match()
	});
});

describe('index.js', () => {
	it('includes example test variables', () => {
		expect(testVar).to.exist;
		expect(testVar).to.deep.equal({}); //without .deep, {} does not equal {}
		expect(testFunc).to.exist;
		expect(testFunc()).to.equal('hi');
	});
});
