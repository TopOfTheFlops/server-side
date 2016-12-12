
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('flops').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('flops').insert({lifestyleId: 1, userId: 2, description: 'I do not often cook lasagna, but when I do, I do it right', mediaURL: 'http://assets.kraftfoods.com/recipe_images/opendeploy/Table-for-Two_Lasagna_640x428.jpg'}),
        knex('flops').insert({lifestyleId: 1, userId: 1, description: 'It was great to see this lasagna turn out so well, Now I am hoping to come out on top!', mediaURL: 'https://barilla.azureedge.net/~/media/images/en_us/hero-images/oven-ready-lasagna.jpg'}),
        knex('flops').insert({lifestyleId: 1, userId: 3, description: 'My lasagna is a bit shit, but oh well!', mediaURL: 'http://yesofcorsa.com/wp-content/uploads/2015/08/1217_lasagna-1024x768.jpg'}),
        knex('flops').insert({lifestyleId: 1, userId: 1, description: 'This is definitely a very middle of the range lasagna', mediaURL: 'http://www.drodd.com/images13/lasagna-recipe23.jpg'}),
        knex('flops').insert({lifestyleId: 2, userId: 2, description: 'I have been stacking cups for 14 years, If I do not come first here, Life may not be worth living', mediaURL: 'http://images.says.com/uploads/story_source/source_image/420721/0eb8.jpg'}),
        knex('flops').insert({lifestyleId: 2, userId: 3, description: 'Cup stacking is quite good', mediaURL: 'http://sunycortlandedu255.pbworks.com/f/1322791007/SpeedStacks.jpg'}),
        knex('flops').insert({lifestyleId: 2, userId: 3, description: 'I only just started stacking my cups, but I think I am pretty good!', mediaURL: 'https://i.ytimg.com/vi/VyyscuIq56I/maxresdefault.jpg'}),
        knex('flops').insert({lifestyleId: 2, userId: 2, description: 'Stacking cups is the only thing that really matters in life', mediaURL: 'http://www.dailyherald.com/storyimage/DA/20141003/news/141009429/AR/0/AR-141009429.jpg&updated=201410031506&MaxW=800&maxH=800&noborder'}),
        knex('flops').insert({lifestyleId: 3, userId: 1, description: 'If balancing on a ball was a profession, then I would never be short of work', mediaURL: 'http://www.exercise-ball-exercises.com/images/sit_10b.jpg'}),
        knex('flops').insert({lifestyleId: 3, userId: 2, description: 'I have always been a extremely competitive, I just want to win everything', mediaURL: 'http://www.scoopcharlotte.com/wp-content/uploads/2015/04/Pink-Yoga-Ball-2.jpg'}),
        knex('flops').insert({lifestyleId: 3, userId: 2, description: 'When you can balance like me life is a breeze', mediaURL: 'http://www.exercise-ball-exercises.com/images/sit_7a.jpg'}),
        knex('flops').insert({lifestyleId: 3, userId: 3, description: 'I taught Mr Myagi how to balance', mediaURL: 'http://3.bp.blogspot.com/-U3S-ql8GzJg/VUm-cY72WrI/AAAAAAAAGlU/8PQcFrYab6c/s1600/yoga_ball.jpg'}),
        knex('flops').insert({lifestyleId: 4, userId: 1, description: 'I always felt like my perfect banana peeling would go forever unnoticed, but now I can show the world my worth', mediaURL: 'http://www.teluguone.com/tonecmsuserfiles/You%20Want%20to%20Lose%20Weight%20Just%20eat%20Bananas(1).jpg'}),
        knex('flops').insert({lifestyleId: 4, userId: 2, description: 'Look at this banana, have you ever seen anything so beautiful', mediaURL: 'http://presentway.com/wp-content/uploads/2015/12/baby-eating-banana-no-sugar.jpg'}),
        knex('flops').insert({lifestyleId: 4, userId: 1, description: 'So, this happened earlier... You will never see anything as great as this again', mediaURL: 'http://www.fdbusiness.com/wp-content/uploads/2013/04/images-7.jpg'}),
        knex('flops').insert({lifestyleId: 4, userId: 1, description: 'This is my banana...', mediaURL: 'https://authoritynutrition.com/wp-content/uploads/2014/03/man-unhappy-about-eating-a-banana.jpg'})
      ]);
    });
};
