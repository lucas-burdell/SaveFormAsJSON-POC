function MapObjectToForm(obj, formId) {
  var inputs = $(`#${formId} :input`)
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      $(inputs).each(function(){
        if (this.name == property) {
          $(this).val(obj[property]);
        }
      });
    }
  }
}

function MapFormToObject(formId) {
  var inputs = $(`#${formId} :input`)
  var obj = {};
  $(inputs).each(function(){
    obj[this.name] = $(this).val();
  });
  return obj;
}
