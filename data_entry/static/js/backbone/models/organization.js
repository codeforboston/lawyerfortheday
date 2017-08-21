var Organization = Backbone.Model.extend({
  urlRoot: "http://api.open.referral.adopta.agency/organizations/",
  defaults: {
    "id": "",
    "name": "",
    "alternate_name": "",
    "description": "",
    "email": "",
    "url": "",
    "tax_status": "",
    "tax_id": "",
    "year_incorporated": "",
    "legal_status": ""
  }
});
