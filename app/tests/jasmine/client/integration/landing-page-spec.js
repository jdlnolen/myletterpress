describe('The landing page', function () {

  describe('chapter helper', function () {

    beforeEach(function (done) {
      Meteor.call('fixtures/reset', done);
    });

    it('should return the chapters in the defined order', function (done) {

      // - - SETUP
      Meteor.call(
        'fixtures/page/create', [
          {
            template: 'chapter',
            title: 'second',
            order: 2
          },
          {
            template: 'chapter',
            title: 'first',
            order: 1
          }
        ], function (error) {

          var chapterHelper = Template['landing-page'].__helpers.get('chapters');

          // - - EXECUTE
          var chapters = chapterHelper().fetch();

          // - - VERIFY
          expect(error).toBe(undefined);
          expect(chapters.length).toBe(2);
          expect(chapters[0].title).toBe('first');
          expect(chapters[1].title).toBe('second');

          done();

        });

    });

  });

});