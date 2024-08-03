import React, { useContext } from 'react';
import { SearchContext } from '../../../context';

function RecentWeatherHistory() {
    const { searchHistory } = useContext(SearchContext);
    console.log(searchHistory);



    return (
        <div className="w-full px-2 border-r border-gray-700">
            <div className="flex justify-between items-center bg-amber-500 bg-transparent px-3 rounded text-white text-xl font-semibold py-2 mb-4">
                <h3 className="">Recent Search Location </h3>
                {/* <FaCloud /> */}
            </div>
            <div className="flex flex-col px-0 space-y-4">
                {
                    searchHistory.map((history,) => (


                        <ul key={history.history} className="flex justify-between items-center bg-gray-400 hover:bg-slate-500 px-2 py-3 rounded text-xl transition-all" >
                            <li >{history}</li>

                        </ul>
                    ))
                }

            </div>
        </div>
    )
}

export default RecentWeatherHistory