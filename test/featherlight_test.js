if(!this.chai) { chai = require("chai"); }
var expect = chai.expect;

(function($) {

	describe('Featherlight', function() {

		it ('works on items with data-featherlight by default', function(done) {
			var $bound = $('#auto-bound')
			expect($('img').length).to.equal(0);
			$bound.click();
			setTimeout(function() {
				expect($('.featherlight img').attr('src')).to.equal('fixtures/photo.jpeg');
				$('.featherlight').click();
			}, 500 );
			setTimeout(function() {
				expect($('img:visible')).to.have.length(0);
				done();
			}, 1000 );
		});

		describe('jQuery#featherlight', function() {

			it('is chainable', function() {
				// Not a bad test to run on collection methods.
				var $all_links = $('a')
				expect($all_links.featherlight()).to.equal($all_links);
			});

		});

		describe('jQuery.featherlight', function() {

			it('opens a dialog box', function() {
				$.featherlight('<p class="testing">This is a test<p>');
				expect($('.featherlight p.testing').is(':visible')).to.be.ok;
			});

		});

	});
}(jQuery));
