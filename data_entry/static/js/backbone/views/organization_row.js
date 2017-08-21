var OrganizationRow = Backbone.View.extend({
  tagName: "li",

  template: _.template(
    "<a href=\"/organizations/<%= id %>\"><b><%= name %></b>: <%= description %></a>"),

  render: function() {
    this.$el.html(this.template({
      id: this.model.attributes.id,
      name: this.model.attributes.name,
      description: this.model.attributes.description
    }));
    return this;
  }
});
