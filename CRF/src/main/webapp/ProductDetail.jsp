<%@ page language="java" contentType="text/html; charset=utf8"
	pageEncoding="utf8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<head>
<jsp:include page="/CRFitness.jsp" />
<link href="${this_contextPath}/icon/CRFicon.ico" rel="SHORTCUT ICON">
<link rel="stylesheet" href="${this_contextPath}/css/products.css">
<link rel="stylesheet" href="${this_contextPath}/css/lightbox.css">

<title>商品明細</title><base>
<style type="text/css">
.ProductDetail{
	margin-top: 10%;
}
</style>
</head>
<body>
<aside>
<script type="text/javascript" src="${this_contextPath}/js/products.js"></script>
<script type="text/javascript" src="${this_contextPath}/js/lightbox.js"></script>

<div class="ProductDetail">

    <div class="row">
	    <div class="col-md-2"></div>
	    <div id="productDetailbody" class="col-md-8"></div>    
	 	<div class="col-md-2"></div>	 	
    </div>
    
</div>
</aside>
<script type="text/javascript">
var queryString='${pageContext.request.queryString}';
	queryString=queryString.substring(17);

$.ajax({
	url:'${this_contextPath}/CRFSERVICE/productDetailController/searchByPrimaryKey',
	type:'get',
 	data:{productDetail_Id:queryString},
	success:function(data){
		$('#productDetailbody').append('<div class="col-md-7"><div class="mag">'
							+data.product_Name+'<br><img data-toggle="magnify" src="data:image/png;base64,'
							+data.photo1+'" /></div></div><div class="col-md-5">尺寸 : '
							+data.size+'<br/>顏色 : '
							+data.color+'<br/>商品介紹 : 未看先猜undefined 一> '
							+data.Detailed_Description+'<br/>剩餘數量 : '
							+data.stock+'</br><a class="btn btn-success" href="data:image/png;base64,'
							+data.photo1+'" data-lightbox="image-1" data-title="'
							+data.product_Name+'">千萬不要按!</a></div>')
	}
});
</script>

</body>
</html>