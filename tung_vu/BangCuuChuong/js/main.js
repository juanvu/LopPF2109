document.write("<table border=1 width=100%>")
    for(i=1;i<=9;i++)   
    {
        document.write("<tr>")
        for(n=2;n<=9;n++)   
        document.write("<td>" + n + "x" + i +"="+ (n*i));
        document.write("</td>");
        document.write("</tr>")
    }
document.write("</tr></table>")