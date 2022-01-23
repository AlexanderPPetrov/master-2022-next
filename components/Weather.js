import { ListGroup, Badge } from "react-bootstrap";
import { useSelector } from 'react-redux'

function Weather(props) {

    const dailyWeather = useSelector((state) => state.dailyWeather)

    function renderDailyWeather() {
        return dailyWeather.map((day, index) => {
            return <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                <span className="text-capitalize">
                    {day.weather[0].description}
                </span>
                <Badge pill bg="info">
                    {day.temp.day}℃
                </Badge>
            </ListGroup.Item>
        })
    }
    return (
        <ListGroup>
            {renderDailyWeather()}
        </ListGroup>
    )
}
export default Weather;