package dao;

import tools.JdbcUtil;
import vo.Goods;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import java.util.ArrayList;


public class GoodsDao {
    public ArrayList<Goods> queryGoods() {
        Goods goods = null;
        ArrayList<Goods> goodsArrayList = new ArrayList<>();
        Connection con = JdbcUtil.getConnection();

        String sql = "select * from t_goods";
        PreparedStatement ps = null;
        try {
            ps = con.prepareStatement(sql);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        ResultSet rs = null;
        try {
            rs = ps.executeQuery();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        try {
            while (rs.next()) {
                String goodsName = rs.getString("goodsName");
                float salesAmount = (float) rs.getInt("salesAmount") / 10000;
                goods = new Goods(goodsName, salesAmount);
                goodsArrayList.add(goods);
            }
            goodsArrayList = sortBySalesAmount(goodsArrayList);
        } catch (SQLException e) {
            e.printStackTrace();
        }


        JdbcUtil.closeAll(rs, ps, con);

        return goodsArrayList;
    }


    public ArrayList<Goods> sortBySalesAmount(ArrayList<Goods> list) {
        for (int i = 0; i < list.size() - 1; i++) { //0~n-1
            for (int j = 0; j < list.size() - 1 - i; j++) {
                if (list.get(j + 1).getsalesAmount() > list.get(j).getsalesAmount()) {
                    Goods temp = list.get(j);
                    list.set(j,list.get(j+1));
                    list.set(j+1,temp);
                }
            }
        }
        return list;
    }

}
