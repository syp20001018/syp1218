package controller;

import com.google.gson.Gson;
import dao.CityTemperDao;
import dao.GoodsDao;
import vo.CityTemper;
import vo.Goods;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

@WebServlet(urlPatterns = "/createLineChart.do")
public class CreateLineChartController extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String jsonStr;
        CityTemperDao cityTemperDao = new CityTemperDao();
        ArrayList<CityTemper> cityTemperArrayList = cityTemperDao.queryCityTemper();
        jsonStr = new Gson().toJson(cityTemperArrayList);

        response.setContentType("text/html;charset=utf-8");
        PrintWriter out = response.getWriter();

        System.out.println("2.折线图信息：");
        System.out.println(jsonStr);
        System.out.println();

        out.print(jsonStr);
        out.flush();
        out.close();


    }
}
