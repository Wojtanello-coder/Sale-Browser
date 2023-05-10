

const DataGetter = (url) => {

    let config = {
        method: 'get',
    maxBodyLength: Infinity,
        url: url,
        headers: { }
    };

    useEffect(() => {
        axios(config)
        .then(function (response) {
            setGames(response.data);
            console.log(response.data);
        })
        .catch(function (error) {
            setGames(data);
            console.log(error);
        });
    }, []);

}

export default DataGetter;