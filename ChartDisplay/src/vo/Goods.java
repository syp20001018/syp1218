package vo;

public class Goods {

	private String goodsName; //商品名
	private float salesAmount; //销售额

	public Goods() {
	}

	public Goods(String goodsName, float salesAmount) {
		this.goodsName = goodsName;
		this.salesAmount = salesAmount;
	}

	public String getName() {
		return goodsName;
	}

	public void setName(String goodsName) {
		this.goodsName = goodsName;
	}

	public float getsalesAmount() {
		return salesAmount;
	}

	public void setsalesAmount(float salesAmount) {
		this.salesAmount = salesAmount;
	}
}