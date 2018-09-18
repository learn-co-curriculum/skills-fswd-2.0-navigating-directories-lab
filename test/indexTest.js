const chai = require('chai');
// // Example Tests
// describe('index.html', () => {
// 	it("includes 'hello' in the body", () => {
// 		expect(
// 			document.querySelector('body').innerHTML,
// 			'the body does not contain "hello"'
// 		).to.include('hello');
// 	});
//
// 	it('includes an empty div in the body', () => {
// 		expect(
// 			document.querySelector('body').innerHTML,
// 			'no empty div element found within body'
// 		).to.include('<div></div>');
// 		//for more general HTML tests, use match() or chai-dom
// 	});
// });
//
// // Example Tests - REMOVE index.js and this test for HTML only labs
// describe('index.js', () => {
// 	it('includes example test variables', () => {
// 		expect(testVar, 'testVar was not found').to.exist;
// 		expect(testVar, 'testVar did not equal {}').to.deep.equal({}); //without .deep, {} does not equal {}
// 		expect(testFunc, 'testFunc was not found').to.exist;
// 		expect(testFunc(), 'testFunc did not return').to.equal('hi');
// 	});
// });

describe('index.html', () => {
	let body;
	beforeEach(function() {
		chai.use(require('chai-dom'));
		body = document.querySelector('body');
	});

	// 1
	it('contains an `h1` nested inside `body`', () => {
		let html = document.querySelector('html');

		expect(html, 'No `body` tag was found').to.contain('body');
		expect(body, 'No `h1` tag was found inside `body`').to.contain('h1');
	});

	// 2
	it('contains an `li` tag nested inside a `ul` tag', () => {
		let ul = document.querySelector('ul');

		expect(body, 'No `ul` tag was found').to.contain('ul');
		expect(ul, 'No `li` tag was found inside a `ul` tag').to.contain('li');
	});

	// 3
	it('contains a `span` tag inside a `main` tag', () => {
		let main = document.querySelector('main');

		expect(body, 'No `main` tag was found').to.contain('main');
		expect(main, 'No `span` tag was found inside a `main` tag').to.contain(
			'span'
		);
	});

	// 4
	it('contains a `header` tag inside an `article` tag', () => {
		let article = document.querySelector('article');

		expect(body, 'No `article` tag was found').to.contain('article');
		expect(
			article,
			'No `header` tag was found inside an `article` tag'
		).to.contain('header');
	});

	// 5
	it('contains an `h4` tag inside a `aside` tag', () => {
		let aside = document.querySelector('aside');

		expect(body, 'No `aside` tag was found').to.contain('aside');
		expect(aside, 'No `h4` tag was found inside an `aside` tag').to.contain(
			'h4'
		);
	});

	// 6
	it('contains a `strong` tag and an `em` tag inside a `p` tag', () => {
		let p = document.querySelector('p');

		expect(body, 'No `p` tag was found').to.contain('p');
		expect(p, 'No `strong` tag was found inside a `p` tag').to.contain(
			'strong'
		);
		expect(p, 'No `em` tag was found inside a `p` tag').to.contain('em');
	});

	// 7
	it('contains a `summary` tag inside a `details` tag', () => {
		let details = document.querySelector('details');

		expect(body, 'No `details` tag was found').to.contain('details');
		expect(
			details,
			'No `summary` tag was found inside a `details` tag'
		).to.contain('summary');
	});

	// 8
	it('contains a `q` tag inside a `div` tag', () => {
		let div = document.querySelector('div');

		expect(body, 'No `div` tag was found').to.contain('div');
		expect(div, 'No `q` tag was found inside a `div` tag').to.contain('q');
	});

	// 9
	it('contains a `del` tag and an `ins` tag inside an `address` tag', () => {
		let address = document.querySelector('address');

		expect(body, 'No `address` tag was found').to.contain('address');
		expect(address, 'No `del` tag was found inside a `address` tag').to.contain(
			'del'
		);
		expect(address, 'No `ins` tag was found inside a `address` tag').to.contain(
			'ins'
		);
	});

	// 10
	it('contains a `mark` tag inside an `h3` tag inside a `section` tag', () => {
		let section = document.querySelector('section');
		let h3 = document.querySelector('h3');

		expect(body, 'No `section` tag was found').to.contain('section');
		expect(section, 'No `h3` tag was found inside a `section` tag').to.contain(
			'h3'
		);
		expect(h3, 'No `mark` tag was found inside a `h3` tag').to.contain('mark');

		expect(
			section,
			'Create a `mark` tag inside an `h3` tag inside an `section` tag'
		).to.contain('mark');
	});
});
