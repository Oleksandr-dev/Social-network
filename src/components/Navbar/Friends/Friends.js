import styles from "./Friends.module.css"
import Friend from "./Friend/Friend";

let friend = [
    {id: 1, name: 'Sasha', img:"https://media.2x2tv.ru/content/images/size/w1440h1080/2021/10/---2.jpg",},
    {id: 2, name: 'Frost', img:"https://i2-prod.mirror.co.uk/incoming/article26332089.ece/ALTERNATES/s1200b/0_Peaky-Blinders.jpg",},
    {id: 3, name: 'Andrew', img:"",},
    {id: 4, name: 'Tania', img:"",},
    {id: 5, name: 'Dima', img:"",},
    {id: 6, name: 'Roman Zap', img:"",},
    {id: 7, name: 'Sasha Avr', img:"",},
]

const Friends = (props) => {

    let friendList = friend.filter( f => (f.id <= 3)).map( f => (<Friend key ={f.id} name={f.name} img={f.img}/>))
    friendList.push(<Friend key ={0} name={"more"} img={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAACGhoaNjY38/Pzl5eWcnJzs7Ozy8vK8vLzLy8tvb2/f3991dXVKSkoyMjLX19eTk5NCQkKmpqZcXFw7Ozt8fHyCgoLR0dFHR0fY2NiZmZnHx8f39/ccHBysrKwWFhYODg60tLQnJydUVFRoaGg9PT0gICDKKIhyAAADkklEQVR4nO3b63qiMBCAYeIJ8HysrXZV7On+73ChtFsokkxG92nF7/0/8wwhhgnEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAVCaf7WSs1W/TDzoVyRt24105ztntxN7pQzk7YX+SF7qehPKq/fjAFq0F8fkHD3vJQyHlY9oZn54ziwaRY6MO6L7kb4ezNVCSD+7NqiR+qOc38eFbOzSip5nxru+5kODhRSj5A+mtc1OU0C3XO+1Nj9m5gu8ZOr7YWV6illokl56SvyhmNbIVua+fqcGWLSymmVefOkfNOsZDFjpyrzem4oyMuK8e3lq5r0NLb2PVNunYXuj8V13bHGTP2G/GpJKeZ+l3gWJKzXY1zzaYP8z8etTzKcppHj5x/apeYssp0awmLMWN5MbI7mPG4i8/SnK1ynHURLVtKa+nKcxrxb3Epz9krxvU9ijEzYTG2p8R3E+Hve+tTaOFJFO18Ao3s2S/8YX+QrdL3Xjl3X82m9flZNZEU4zUtTGnA6/lMi9RINzKp7eWLEQ2b1xzNfM4291P5O3f/Vt+L1jn5kC4JvXO+5oHSp1aBe7Hxz5k4c4p6krJ87oufMAWupU/QAVa4ut6OIudzFjhUBDqn1FyRc+7IudcUmu2zZ5pARzWqUTOOXb9m1N5/T6pAx1rj0SIV2PfD/utMJr0VkSrQxNZqPHqrAns/6NoU1oi0gSNbMdHBneCEg/WFl2db8ilWTij7FsOn5y6y9t+ibWFVL3jRBT7Zxls5L6xTP3rS5XxRNDQ523gr50V5v3OhebEK/LYVX2xLu6L5eHfi1cM/ugdQusEIEmWk7QrFLwy+aVlyaq8wUTSQuWu5QhMkysBrucLkBn6HzV9Lm/88bH5Poxxv67sxZV+6+z99afP3Fs3fH97AHr/572ma/65N877U1nzkFNU4cypapY8vk41/530D3y1+xbcn0Sc77bcn3x7kWr4fvhV6JK/FRjJHUx2fAV/Jcvo9vEufJBv/Hf8GzmLcwHka6Zkoj1qCX3YmStRprf1q+blzbTUd4PDVEWffFOrK8T4MGAjOJtbuUhp/vjQV1oaOPX8tBfukLqm7F60zrV1TnTciOn3OW399mV90zjvT6bdKy9VlzuovlsV3z7vl4iJn9UsL2bglOqufCzfHbfuK/m/R3h43umUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+Qv7iQ69Hax560AAAAASUVORK5CYII="}/>)


    return (
        <div className={styles.friendsBox }>
            <div className={styles.head}>
                Friends
            </div>
            <div className={styles.friend}>
                {friendList}

                {/*<img src={friend[0].img}/>
                <div className={styles.name}>
                    {friend[0].name}
                </div>*/}
            </div>
        </div>
    )
}

export default Friends