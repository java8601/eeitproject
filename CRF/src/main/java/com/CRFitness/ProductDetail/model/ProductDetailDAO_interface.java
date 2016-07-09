package com.CRFitness.ProductDetail.model;

import java.util.List;


public interface ProductDetailDAO_interface {

	
	public boolean insert(ProductDetailVO productDetailVO);
	public boolean update(ProductDetailVO productDetailVO);
	public boolean delete(String productDetail_Id);       
	public ProductDetailVO findByPrimaryKey(String productDetail_Id);
	public List<ProductDetailVO> getAll();
	public ProductDetailVO getProductDetailId(String product_Name, String size, String color);
	public List<ProductDetailVO> getItemByCategory(String category);
	
	
	// Back-end: MaintainEquipment.jsp
	List<ProductDetailVO> getEquipment();

	// Back-end: MaintainClothing.jsp
	List<ProductDetailVO> getClothing();

	// Back-end: MaintainAccessories.jsp
	List<ProductDetailVO> getAccessories();

	// Back-end: MaintainShoes.jsp
	List<ProductDetailVO> getShoes();

}

	
