document.write("  <tr> ");
document.write("    <td colspan='4' valign='top'> ");
document.write("      <hr />");
document.write("    </td>");
document.write("  </tr>");

document.write("  <tr> ");
document.write("  <td>");
document.write("    <div align='center'><a href='/Photos/index.html'>");
document.write("      <img src='/images/photo_image.jpg' width='100' height='97' border='0' align='bottom' /></a>");
document.write("    </div>");
document.write("  </td>");


document.write("<script>");
document.write("  (function() {");
document.write("   var cx = '011904477554083402171:plllpqlzbjm';");
document.write("    var gcse = document.createElement('script');");
document.write("   gcse.type = 'text/javascript';");
document.write("    gcse.async = true;");
document.write("   gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +");
document.write("        '//www.google.com/cse/cse.js?cx=' + cx;");
document.write("    var s = document.getElementsByTagName('script')[0];");
document.write("    s.parentNode.insertBefore(gcse, s);") 
document.write(" })();");
document.write("</script>");
document.write("<gcse:search></gcse:search>");







document.write("  <td width='26' valign='top' class='small-italic'>&nbsp;</td>");
document.write("  <td width='567' valign='top' class='small-italic'> &nbsp;Email ");


var contact1 = "Croquet Australia";
var email1 = "admin";
var emailHost = "croquet-australia.com.au";
document.write("<a href=" + "mail" + "to:" + email1 + "@" + emailHost+ ">" + contact1 + "</a>");

document.write("        <br />");
document.write("      &nbsp;Administrative Officer Susan Linge<br />");
document.write("      &nbsp;PO Box 254, Dickson, ACT, 2602<br />");
document.write("      &nbsp;Ph: 0457 678 380. (office) <p></p>");
document.write("    </td>");

document.write("  <td width='244' valign='top'>");
document.write("    <p align='right' class='small-italic'>Email:");

var contact1 = "Webmaster";
var email1 = "webmaster";
var emailHost = "croquet-australia.com.au";
document.write("<a href=" + "mail" + "to:" + email1 + "@" + emailHost+ ">" + contact1 + "</a>");

document.write("     <br />");

var d = new Date(document.lastModified);
var curr_date = d.getDate();
var curr_month = d.getMonth() + 1; //months are zero based
var curr_year = d.getFullYear();
var mmm = 
    ( 1==curr_month)?'Jan':( 2==curr_month)?'Feb':(3==curr_month)?'Mar':
    ( 4==curr_month)?'Apr':( 5==curr_month)?'May':(6==curr_month)?'Jun':
    ( 7==curr_month)?'Jul':( 8==curr_month)?'Aug':(9==curr_month)?'Sep':
    (10==curr_month)?'Oct':(11==curr_month)?'Nov':'Dec';
document.write("Last Updated: " + curr_date + "-" + mmm + "-" + curr_year);
document.write("<p>Copyright © 2014, Croquet Australia. All Rights Reserved.</p>");


document.write("      </p>");
document.write("    </td>");
document.write("  </tr>");
