(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['activityViewTpl'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "  <span class=\"activity-message pull-left\">";
  stack1 = ((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</span>\n  <span class=\"activity-cancel glyphicon glyphicon-remove-sign\" style=\"margin-left:10px;\"></span>";
},"useData":true});
templates['hitMarkerViewTpl'] = template({"1":function(depth0,helpers,partials,data) {
  return "";
},"3":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "    <h5>"
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</h5>\n";
},"5":function(depth0,helpers,partials,data) {
  return "    <h5>(no name string)</h5>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.debug || (depth0 && depth0.debug) || helperMissing).call(depth0, depth0, {"name":"debug","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n<div class=\" pu-copy pu-copy-marker col-sm-12\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.name : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true});
templates['postsActiveViewTpl'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "    <div class=\"\">\n";
  stack1 = lambda((depth0 != null ? depth0.content : depth0), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n        \n    </div>";
},"useData":true});
templates['postsGeomFakeViewTpl'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.the_geom : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<li data-id=\""
    + escapeExpression(lambda((depth0 != null ? depth0.id : depth0), depth0))
    + "\" class=\"pick ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.active : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n    <div class=\"\">\n"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.the_geom : depth0)) != null ? stack1.type : stack1), depth0))
    + "\n\n    </div>\n</li>\n";
},"3":function(depth0,helpers,partials,data) {
  return "active";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<ul>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</ul>";
},"useData":true});
templates['postsListViewTpl'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<li data-target=\""
    + escapeExpression(lambda((depth0 != null ? depth0.location : depth0), depth0))
    + "\" data-id=\""
    + escapeExpression(lambda((depth0 != null ? depth0.id : depth0), depth0))
    + "\" class=\"pick";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.active : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.seen : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n    <div class=\"\">\n"
    + escapeExpression(lambda((depth0 != null ? depth0.title : depth0), depth0))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.location : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n\n    </div>\n</li>\n";
},"2":function(depth0,helpers,partials,data) {
  return " active";
  },"4":function(depth0,helpers,partials,data) {
  return " seen";
  },"6":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "("
    + escapeExpression(lambda((depth0 != null ? depth0.location : depth0), depth0))
    + ")";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});
})();