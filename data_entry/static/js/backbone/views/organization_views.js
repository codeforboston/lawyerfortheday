var OrganizationView = Backbone.View.extend({
  tagName: "li",

  template: _.template(
    "<b><%= name %></b>: <%= description %>"),

  render: function() {
    this.$el.html(this.template({
      name: this.model.attributes.name,
      description: this.model.attributes.description
    }));
    return this;
  }
});

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
  },

  events: {
    'click .fetch': 'onFetch'
  },

  onFetch: function() {
    alert("fetch");
  }
});
