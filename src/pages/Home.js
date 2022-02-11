const Home = () => {
    return(
        <div>
            <h1 style={title}>Featuring Contestants from</h1>
            <h1 style={title}> MasterChef and MasterChef Junior</h1>

            <button style={button}>Buy tickets</button>

            <div style={imgContainer}>
                <img src="https://images.squarespace-cdn.com/content/v1/5c881f812727be4b51cfb626/1633982959732-SOUSLPWK1VYC3EXWXKDQ/NEW+ART+FT.+gerron+-01.jpg" style={img}></img>
            </div>
        </div>
    )
}

const imgContainer = {
    position: 'relative',
    paddingBottom: '74.46428680419922%',
    overflow: 'hidden'
}

const img = {
    left: '0%',
    top: '-0.000858516%',
    width: '100%',
    height: '100.002%',
    position: 'absolute'
}

const button = {
    backgroundColor: '#5fc3b1',
    borderColor: '#5fc3b1',
    color: '#fff',
    borderRadius: '300px',
    padding: "21px 41px",
    fontFamily: "Helvetica",
    fontSize: "15px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "3px",
    display: "inline-block",
    width: "auto",
    height: "auto"
}

const title = {
    color: "#e55400",
    fontFamily: "helvetica",
    fontSize: "60px"
}

export default Home;