var OrganizationEdit = Backbone.View.extend({
  el: '#edit_organization',

  template: _.template($('#edit_organization_form').html()),

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.model.fetch();
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
  
});
