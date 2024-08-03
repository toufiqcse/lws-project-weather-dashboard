import useOnlineStatus from "../../Hooks/useOnlineStatus";


const OnlineStatus = () => {
    const isOnline = useOnlineStatus();  //import custom hook

    // console.log(data);
    return (
        <div>
            <h1>{isOnline ? "Connected" : "disconnected"}</h1>
        </div>
    );
};

export default OnlineStatus;
