import React from 'react';

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            {/* //     <div className="loader border-t-4 border-b-4 border-gray-300 rounded-full w-12 h-12 animate-spin"></div> */}
            {/* // </div> */}
            <div className="animate-pulse flex flex-col items-center gap-4 w-full">
                <div>
                    <div className="w-48 h-6 bg-slate-400 rounded-md"></div>
                    <div className="w-28 h-4 bg-slate-400 mx-auto mt-3 rounded-md"></div>
                </div>
                <div className="h-7 bg-slate-400 w-full rounded-md"></div>
                <div className="h-7 bg-slate-400 w-full rounded-md"></div>
                <div className="h-7 bg-slate-400 w-full rounded-md"></div>
                <div className="h-7 bg-slate-400 w-1/2 rounded-md"></div>
            </div>
        </div >
    );
};

export default Loader;
