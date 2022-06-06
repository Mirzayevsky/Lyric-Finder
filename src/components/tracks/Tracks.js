import React,{useContext} from "react";
import { GlobalContext} from "../../context";
import Track from "./Track";
import Spinner from "../layout/Spinner";
const Tracks = () => {
    const {state} = useContext(GlobalContext)
    console.log(state)
    const { track_list, heading } = state;

    if (track_list === undefined || track_list.length === 0) {
        return <Spinner />;
    } else {
        return (
            <>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                    {track_list.map(item => (
                        <Track key={item.track.track_id} track={item.track} />
                    ))}
                </div>
            </>
        );
    }

}
export default Tracks