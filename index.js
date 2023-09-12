function toggleAccordion(itemNumber) {
  var collapseId = "#faqCollapse-" + itemNumber;
  $(collapseId).toggleClass('show');
  $('.collapse').not(collapseId).removeClass('show');
}