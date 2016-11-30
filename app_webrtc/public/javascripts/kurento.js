kurentoClient.KurentoClient("ws://5.135.191.226:8888/kurento", function(kurento,test)
    {
        console.log(kurento);
        console.log(test);
    },
    function(error)
    {
        console.log("error");
    });

