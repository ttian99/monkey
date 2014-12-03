[javascript] view plaincopy
<script language="javascript">      
str="2,2,3,5,6,6"; //这是一字符串  
var strs= new Array(); //定义一数组  
  
strs=str.<strong>split</strong>(","); //字符分割        
for (i=0;i<strs.length ;i++)      
    {      
        alert(strs[i]);    //分割后的字符输出  
    }   
< /script>  