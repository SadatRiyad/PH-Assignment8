/* eslint-disable react/prop-types */

const Tag = ({ tag }) => {
    const tags = tag;
    return (

        <button className="bg-[#23BE0A0D] py-1 px-2 mr-2 rounded">#{tags}</button>

    );
};

export default Tag;