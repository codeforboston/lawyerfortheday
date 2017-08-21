var Organizations = Backbone.Collection.extend({
  model: Organization,
  url: 'http://api.open.referral.adopta.agency/organizations/',
  //url: 'http://api.open.referral.adopta.agency/organizations/?page=1&per_page=4',
});
