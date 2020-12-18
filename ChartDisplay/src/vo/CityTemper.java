package vo;

public class CityTemper {
    private String cityName;
    private float temperArray[];

    public CityTemper() {
    }

    public CityTemper(String cityName, float[] cityTemper) {
        this.cityName = cityName;
        this.temperArray = cityTemper;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public float[] getCityTemper() {
        return temperArray;
    }

    public void setCityTemper(float[] cityTemper) {
        this.temperArray = cityTemper;
    }
}
