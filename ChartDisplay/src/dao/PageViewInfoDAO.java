package dao;

import tools.JdbcUtil;
import vo.PageViewInfo;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class PageViewInfoDAO {
    public ArrayList<PageViewInfo> queryPageViewInfo() {
        PageViewInfo pageViewInfo = null;
        ArrayList<PageViewInfo> pageViewInfoArrayList = new ArrayList<>();
        Connection con = JdbcUtil.getConnection();

        String sql = "select * from t_pageview_info";
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
                String browserName = rs.getString("browserName");
                float percent = rs.getFloat("percent");
                pageViewInfo = new PageViewInfo(browserName, percent);
                pageViewInfoArrayList.add(pageViewInfo);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }


        JdbcUtil.closeAll(rs, ps, con);

        return pageViewInfoArrayList;
    }
}
