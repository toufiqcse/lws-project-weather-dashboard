import React, { useContext } from 'react';
import { SearchContext } from '../../../context';

function RecentWeatherHistory() {
    const { searchHistory } = useContext(SearchContext);
    console.log(searchHistory);



    return (
        <div className="w-full px-2 border-r dark:border-gray-700 border-gray-400">
            <div className="flex justify-between items-center dark:bg-slate-100 bg-darkBg bg-transparent px-3 rounded text-white text-xl font-semibold py-2 mb-4">
                <h3 className="dark:text-black text-white">Recent Search Location </h3>
                {/* <FaCloud /> */}
            </div>
            <div className="flex flex-col px-0 space-y-4">
                {
                    searchHistory.map((history, i) => (


                        <ul key={history} className="flex justify-between items-center bg-gray-500 hover:bg-slate-500 px-2 py-3 rounded text-xl transition-all" >
                            <li >{history}</li>

                        </ul>
                    ))
                }

            </div>
        </div>
    )
}

export default RecentWeatherHistory