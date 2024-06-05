import React from 'react';

function WpBody() {
    return (
        <div className="ml-20 mr-20 flex justify-center mt-10 h-[300px] ">
            <div className="w-full mt-4 flex justify-center"> {/* Adjusted width */}
                <div className="bg-blue-200 w-3/4"> {/* Adjusted width */}
                    {/* Content of the first gray container */}
                </div>
                <div className="bg-blue-200 w-3/4"> {/* Adjusted width */}
                    {/* Content of the second gray container */}
                </div>
            </div>
        </div>
    );
}

export default WpBody;