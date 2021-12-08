(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['newRecipe'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"recipe\", recipe-name = "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":1,"column":35},"end":{"line":1,"column":43}}}) : helper)))
    + ", recipe-time = "
    + alias4(((helper = (helper = lookupProperty(helpers,"cooktime") || (depth0 != null ? lookupProperty(depth0,"cooktime") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cooktime","hash":{},"data":data,"loc":{"start":{"line":1,"column":59},"end":{"line":1,"column":71}}}) : helper)))
    + ">\r\n    <div class=\"recipe-contents\">\r\n        <div class=\"recipe-image\">\r\n            <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"photoURL") || (depth0 != null ? lookupProperty(depth0,"photoURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photoURL","hash":{},"data":data,"loc":{"start":{"line":4,"column":21},"end":{"line":4,"column":33}}}) : helper)))
    + " alt="
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":38},"end":{"line":4,"column":46}}}) : helper)))
    + ">\r\n        </div>\r\n\r\n        <div class=\"recipe-info\">\r\n            <a class=\"recipe-name\", href = \"#\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":8,"column":47},"end":{"line":8,"column":55}}}) : helper)))
    + "</a>\r\n\r\n            <span class=\"recipe-time\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"cooktime") || (depth0 != null ? lookupProperty(depth0,"cooktime") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cooktime","hash":{},"data":data,"loc":{"start":{"line":10,"column":38},"end":{"line":10,"column":50}}}) : helper)))
    + "</span>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n";
},"useData":true});
})();