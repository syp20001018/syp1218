package dao;

import sun.management.GcInfoBuilder;
import tools.JdbcUtil;
import vo.CityTemper;

import java.sql.*;
import java.util.ArrayList;

public class CityTemperDao {
   public ArrayList<CityTemper> queryCityTemper(){
       CityTemper cityTemper = null;
       ArrayList<CityTemper> cityTemperArrayList = new ArrayList<>();
       Connection con = JdbcUtil.getConnection();

       String sql = "select * from t_city_temper";
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
               String cityName = rs.getString("cityName");
               String[] temperStrArray = rs.getString("temperStr").split(",");
               //把气温字符串数组 转化成 气温浮点数数组
               float[] temperArray = new float[12];
               //System.out.println(temperStrArray.length);
               for (int i = 0; i < temperStrArray.length; i++) {
                   temperArray[i] = Float.parseFloat(temperStrArray[i]);
               }
               //float[] temperArray2 = {1,2,3}; 测试用例
               cityTemper = new CityTemper(cityName,temperArray);
               cityTemperArrayList.add(cityTemper);
           }
       } catch (SQLException e) {
           e.printStackTrace();
       }


       JdbcUtil.closeAll(rs, ps, con);

       return cityTemperArrayList;


   }
}
